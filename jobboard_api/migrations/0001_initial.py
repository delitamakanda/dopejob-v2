# Generated by Django 2.2.28 on 2022-06-26 15:43

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import jobboard_api.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('registration_number', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('last_name', models.CharField(max_length=30)),
                ('first_name', models.CharField(max_length=30)),
                ('birth_date', models.DateField(blank=True, null=True)),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email address')),
                ('active', models.BooleanField(default=True)),
                ('staff', models.BooleanField(default=False)),
                ('admin', models.BooleanField(default=False)),
                ('website_url', models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator])),
                ('home_phone_number', models.CharField(blank=True, max_length=20, null=True)),
                ('mobile_phone_number', models.CharField(blank=True, max_length=30, null=True)),
                ('is_pro', models.BooleanField(default=False)),
                ('username', models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='username')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
        migrations.CreateModel(
            name='Campus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=1000)),
            ],
            options={
                'verbose_name': 'Campus',
                'verbose_name_plural': 'Campus',
            },
        ),
        migrations.CreateModel(
            name='Cursus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'verbose_name': 'Cursus',
                'verbose_name_plural': 'Cursus',
            },
        ),
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('color', models.CharField(max_length=10)),
            ],
            options={
                'verbose_name': 'Faculty',
                'verbose_name_plural': 'Faculties',
            },
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='UsersNewsletter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255)),
                ('date_added', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('object_id', models.PositiveIntegerField()),
                ('status', models.CharField(choices=[('annonce', 'an annonce'), ('reply', 'a reply'), ('message', 'a message')], default='message', max_length=20)),
                ('seen', models.BooleanField(default=False)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('content_type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to='contenttypes.ContentType')),
                ('receiver', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notification_receiver', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Notification',
                'verbose_name_plural': 'Notifications',
                'ordering': ['-created'],
            },
            bases=(models.Model, jobboard_api.models.ContentTypeToGetModel),
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('topic', models.CharField(choices=[('GE', 'General'), ('GR', 'Greeting'), ('DI', 'Dislike'), ('LI', 'Like')], default='GE', max_length=2)),
                ('content', models.TextField()),
                ('publication_date', models.DateField(auto_now_add=True)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Message',
                'verbose_name_plural': 'Messages',
            },
        ),
        migrations.CreateModel(
            name='ManagementCV',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(blank=True, null=True, upload_to='cv_file/%Y/%m/%d/')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Enterprise',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator])),
                ('company_url', models.URLField(blank=True, null=True, validators=[django.core.validators.URLValidator])),
                ('address', models.TextField()),
                ('description', models.CharField(blank=True, max_length=300, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, db_index=True)),
                ('user_from', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rel_from_set', to=settings.AUTH_USER_MODEL)),
                ('user_to', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='rel_to_set', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-created',),
            },
        ),
        migrations.CreateModel(
            name='Annonce',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(blank=True, max_length=200, null=True, unique=True)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(null=True)),
                ('is_available', models.BooleanField(default=True)),
                ('localization', models.CharField(blank=True, max_length=100, null=True)),
                ('contact_name', models.CharField(blank=True, max_length=256, null=True)),
                ('contact_email', models.EmailField(blank=True, max_length=180, null=True)),
                ('url_redirection', models.URLField(blank=True, max_length=740, null=True, validators=[django.core.validators.URLValidator])),
                ('language', models.CharField(choices=[('FR', 'French'), ('EN', 'English')], default='FR', max_length=2)),
                ('job_offer', models.CharField(choices=[('CDI', 'CDI'), ('CDD', 'CDD'), ('FRE', 'Freelance'), ('STA', 'Stage'), ('ALT', 'Alternance')], default='CDI', max_length=3)),
                ('job_fields', models.CharField(choices=[('UI', 'UI design'), ('FE', 'Front-end development'), ('BA', 'Back-end development'), ('AP', 'App Development'), ('AR', 'Information Architecture'), ('CS', 'Content Strategy'), ('MA', 'Management'), ('SM', 'Social Media Expert'), ('MI', 'Miscellary')], default='UI', max_length=2)),
                ('job_time', models.CharField(choices=[('FUL', 'Temps plein'), ('HAL', 'Temps partiel')], default='FUL', max_length=3)),
                ('job_description', models.CharField(blank=True, max_length=4096, null=True)),
                ('requirements', models.CharField(blank=True, max_length=4096, null=True)),
                ('enterprise', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Enterprise')),
            ],
            options={
                'verbose_name': 'Annonce',
                'verbose_name_plural': 'Annonces',
                'ordering': ('published_date',),
            },
        ),
        migrations.AddField(
            model_name='user',
            name='cursus',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Cursus'),
        ),
        migrations.AddField(
            model_name='user',
            name='faculty',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Faculty'),
        ),
        migrations.AddField(
            model_name='user',
            name='following',
            field=models.ManyToManyField(related_name='followers', through='jobboard_api.Contact', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='user',
            name='job',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Job'),
        ),
    ]
