# Generated by Django 2.2.24 on 2021-07-14 21:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import jobboard_api.models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contenttypes', '0002_remove_content_type_name'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
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
                ('title', models.CharField(max_length=255)),
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
                ('home_phone_number', models.CharField(blank=True, max_length=20)),
                ('mobile_phone_number', models.CharField(blank=True, max_length=30)),
                ('username', models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='username')),
                ('network', models.ManyToManyField(related_name='_user_network_+', to='jobboard_api.User')),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
        migrations.CreateModel(
            name='Enterprise',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='jobboard_api.User')),
                ('logo', models.ImageField(blank=True, upload_to='enterprise_image/%Y/%m/%d/')),
                ('office', models.CharField(max_length=255)),
                ('company_url', models.URLField(blank=True, null=True)),
                ('address', models.TextField()),
                ('description', models.CharField(blank=True, max_length=300)),
            ],
            options={
                'abstract': False,
            },
            bases=('jobboard_api.user',),
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
            name='Student',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='jobboard_api.User')),
                ('year', models.IntegerField()),
                ('cursus', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Cursus')),
                ('faculty', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Faculty')),
            ],
            options={
                'abstract': False,
            },
            bases=('jobboard_api.user',),
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='jobboard_api.User')),
                ('office', models.CharField(max_length=30)),
                ('faculty', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Faculty')),
                ('job', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='jobboard_api.Job')),
            ],
            options={
                'abstract': False,
            },
            bases=('jobboard_api.user',),
        ),
        migrations.CreateModel(
            name='Annonce',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(max_length=200, null=True, unique=True)),
                ('created_date', models.DateTimeField(default=django.utils.timezone.now)),
                ('published_date', models.DateTimeField(blank=True, null=True)),
                ('is_available', models.BooleanField(default=True)),
                ('localization', models.CharField(blank=True, max_length=100, null=True)),
                ('contact_name', models.CharField(blank=True, max_length=256, null=True)),
                ('contact_email', models.EmailField(max_length=180, null=True)),
                ('url_redirection', models.URLField(blank=True, max_length=740)),
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
    ]
