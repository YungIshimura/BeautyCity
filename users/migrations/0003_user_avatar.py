# Generated by Django 3.2.10 on 2022-12-20 13:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_remove_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.FileField(blank=True, upload_to='', verbose_name='Аватарка'),
        ),
    ]
