from datetime import datetime
import uuid
from djongo import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser)
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.utils.translation import ugettext_lazy as _
from django.conf import settings
from django.utils.text import slugify
from django.utils import timezone
from django.urls import reverse
from django.core.validators import URLValidator


class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        """
        Creates and saves a User with the given email and password.
        """
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password):
        """
        Creates and saves a staff user with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            email,
            password=password,
        )
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    registration_number = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    last_name = models.CharField(max_length=30)
    first_name = models.CharField(max_length=30)
    birth_date = models.DateField(blank=True, null=True)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True
    )
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    website_url = models.URLField(
        validators=[URLValidator], blank=True, null=True)
    home_phone_number = models.CharField(max_length=20, blank=True, null=True)
    mobile_phone_number = models.CharField(
        max_length=30, blank=True, null=True)
    is_pro = models.BooleanField(default=False)
    cursus = models.ForeignKey(
        'Cursus', on_delete=models.CASCADE, blank=True, null=True)
    faculty = models.ForeignKey(
        'Faculty', on_delete=models.CASCADE, blank=True, null=True)
    job = models.ForeignKey(
        'Job', on_delete=models.CASCADE, blank=True, null=True)
    username = models.CharField(
        verbose_name='username',
        max_length=255,
        unique=True,
        blank=True,
        null=True
    )
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return 'User {} {}'.format(self.last_name, self.first_name)

    def get_full_name(self):
        return self.email

    def get_short_name(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin

    def save(self, *args, **kwargs):
        if not self.username:
            self.username = self.email
        super(User, self).save(*args, **kwargs)


class Message(models.Model):
    GENERAL = 'GE'
    GREETING = 'GR'
    DISLIKE = 'DI'
    LIKE = 'LI'
    TOPIC_CHOICES = (
        (GENERAL, 'General'),
        (GREETING, 'Greeting'),
        (DISLIKE, 'Dislike'),
        (LIKE, 'Like'),
    )
    topic = models.CharField(
        max_length=2,
        choices=TOPIC_CHOICES,
        default=GENERAL,
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.TextField()
    publication_date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name = 'Message'
        verbose_name_plural = 'Messages'

    def __str__(self):
        if len(self.content) > 20:
            return self.content[:19] + "..."
        else:
            return self.content


class ContentTypeToGetModel(object):

    """
    requires fields:
        - content_type: FK(ContentType)
        - object_id: PositiveIntegerField()
    """

    def get_related_object(self):
        """
        return the related object of content_type.
        eg: <Question: Holisticly grow synergistic best practices>
        """
        # This should return an error: MultipleObjectsReturned
        # return self.content_type.get_object_for_this_type()
        # So, i handle it with this one:
        model_class = self.content_type.model_class()
        return model_class.objects.get(id=self.object_id)

    @property
    def _model_name(self):
        """
        return lowercase of model name.
        eg: `question`, `answer`
        """
        return self.get_related_object()._meta.model_name


class Notification(models.Model, ContentTypeToGetModel):
    receiver = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='notification_receiver', on_delete=models.CASCADE)
    content_type = models.ForeignKey(
        ContentType, related_name='notifications', on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')

    STATUS_CHOICES = (
        ('annonce', _('an annonce')),
        ('reply', _('a reply')),
        ('message', _('a message'))
    )

    status = models.CharField(
        max_length=20, choices=STATUS_CHOICES, default='message')
    seen = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        title = _('%(receiver)s have a %(status)s in the %(model)s:%(id)s')
        return title % {'receiver': self.receiver.first_name, 'status': self.status, 'model': self._model_name, 'id': self.object_id}

    class Meta:
        verbose_name = 'Notification'
        verbose_name_plural = 'Notifications'
        ordering = ['-created']


class Faculty(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=10)

    class Meta:
        verbose_name = 'Faculty'
        verbose_name_plural = 'Faculties'

    def __str__(self):
        return 'Faculté: {}'.format(self.name)


class Campus(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=1000)

    class Meta:
        verbose_name = 'Campus'
        verbose_name_plural = 'Campus'

    def __str__(self):
        return 'Campus: {}'.format(self.name)


class Job(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return 'Job Title: {}'.format(self.title)


class ManagementCV(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    file = models.FileField(
        upload_to='cv_file/%Y/%m/%d/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Job Title: {}'.format(self.title)


class Cursus(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = 'Cursus'
        verbose_name_plural = 'Cursus'

    def __str__(self):
        return 'Cursus: {}'.format(self.title)


class Enterprise(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    logo = models.URLField(
        validators=[URLValidator], blank=True, null=True)
    company_url = models.URLField(
        validators=[URLValidator], blank=True, null=True)
    address = models.TextField()
    description = models.CharField(max_length=300, blank=True, null=True)

    @property
    def logo_url(self):
        if self.logo and hasattr(self.logo, 'url'):
            return self.logo.url

    def __str__(self):
        return 'Enterprise {}'.format(self.office)


class Annonce(models.Model):
    LANGUAGES_FRENCH = 'FR'
    LANGUAGES_ENGLISH = 'EN'

    OFFER_CDI = 'CDI'
    OFFER_CDD = 'CDD'
    OFFER_FREELANCE = 'FRE'
    OFFER_STAGE = 'STA'
    OFFER_ALTERNANCE = 'ALT'
    OFFER_FULLTIME = 'FUL'
    OFFER_HALFTIME = 'HAL'

    FIELD_UI = 'UI'
    FIELD_FRONT_END = 'FE'
    FIELD_BACK_END = 'BA'
    FIELD_APP = 'AP'
    FIELD_INFO_ARCHITECTURE = 'AR'
    FIELD_CONTENT_STRATEGY = 'CS'
    FIELD_MANAGEMENT = 'MA'
    FIELD_SOCIAL_MEDIA = 'SM'
    FIELD_MISCELLARY = 'MI'

    LANGUAGES_CHOICES = [
        (LANGUAGES_FRENCH, 'French'),
        (LANGUAGES_ENGLISH, 'English'),
    ]

    OFFER_CHOICES = [
        (OFFER_CDI, 'CDI'),
        (OFFER_CDD, 'CDD'),
        (OFFER_FREELANCE, 'Freelance'),
        (OFFER_STAGE, 'Stage'),
        (OFFER_ALTERNANCE, 'Alternance'),

    ]

    TIME_CHOICES = [
        (OFFER_FULLTIME, 'Temps plein'),
        (OFFER_HALFTIME, 'Temps partiel'),
    ]

    JOB_FIELDS_CHOICES = [
        (FIELD_UI, 'UI design'),
        (FIELD_FRONT_END, 'Front-end development'),
        (FIELD_BACK_END, 'Back-end development'),
        (FIELD_APP, 'App Development'),
        (FIELD_INFO_ARCHITECTURE, 'Information Architecture'),
        (FIELD_CONTENT_STRATEGY, 'Content Strategy'),
        (FIELD_MANAGEMENT, 'Management'),
        (FIELD_SOCIAL_MEDIA, 'Social Media Expert'),
        (FIELD_MISCELLARY, 'Miscellary'),
    ]

    title = models.CharField(max_length=100)
    slug = models.SlugField(
        max_length=200, db_index=True, unique=True, blank=True, null=True)
    enterprise = models.ForeignKey(
        'Enterprise', on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(null=True)
    is_available = models.BooleanField(default=True)
    localization = models.CharField(max_length=100, blank=True, null=True)
    contact_name = models.CharField(max_length=256, blank=True, null=True)
    contact_email = models.EmailField(max_length=180, blank=True, null=True)
    url_redirection = models.URLField(max_length=740, validators=[
                                      URLValidator], blank=True, null=True)
    language = models.CharField(
        max_length=2, choices=LANGUAGES_CHOICES, default=LANGUAGES_FRENCH)
    job_offer = models.CharField(
        max_length=3, choices=OFFER_CHOICES, default=OFFER_CDI)
    job_fields = models.CharField(
        max_length=2, choices=JOB_FIELDS_CHOICES, default=FIELD_UI)
    job_time = models.CharField(
        max_length=3, choices=TIME_CHOICES, default=OFFER_FULLTIME)
    job_description = models.CharField(max_length=4096, blank=True, null=True)
    requirements = models.CharField(max_length=4096, blank=True, null=True)

    class Meta:
        ordering = ('published_date',)
        verbose_name = 'Annonce'
        verbose_name_plural = 'Annonces'

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Annonce, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('job-details', kwargs={'slug', self.slug})

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def was_published_recently(self):
        now = timezone.now()
        return now - datetime.timedelta(days=1) <= self.published_date <= now

    def is_upperclass(self):
        return self.model in (self.OFFER_CDI, self.OFFER_CDD)

    def __str__(self):
        return 'Annonce {} - {}'.format(self.title, self.localization)


class Contact(models.Model):
    user_from = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='rel_from_set', on_delete=models.CASCADE)
    user_to = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='rel_to_set', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        ordering = ('-created',)

    def __str__(self):
        return '{} follows {}'.format(self.user_from, self.user_to)


# add to User models dynamically
User.add_to_class('following', models.ManyToManyField(
    'self', through=Contact, related_name='followers', symmetrical=False))
