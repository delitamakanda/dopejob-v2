# Generated by Django 2.2.28 on 2023-04-02 22:42

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('jobboard_api', '0003_remove_annonce_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='enterprise',
            name='company_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='annonce',
            name='enterprise',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='enterprise', to='jobboard_api.Enterprise'),
        ),
        migrations.AlterField(
            model_name='enterprise',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
