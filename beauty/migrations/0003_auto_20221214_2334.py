# Generated by Django 3.2.10 on 2022-12-14 20:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beauty', '0002_auto_20221214_1910'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20, verbose_name='Категория')),
                ('procedures', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='category', to='beauty.procedure')),
            ],
        ),
        migrations.AddField(
            model_name='salon',
            name='procedure_categories',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='salons', to='beauty.category'),
        ),
    ]