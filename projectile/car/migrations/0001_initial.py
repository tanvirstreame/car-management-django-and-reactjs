# Generated by Django 2.0.5 on 2020-04-21 11:29

from decimal import Decimal
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manufacture', models.CharField(max_length=30)),
                ('tagline', models.CharField(max_length=30)),
                ('car_model', models.CharField(max_length=30)),
                ('mileage', models.DecimalField(decimal_places=2, default=Decimal('0'), max_digits=20)),
                ('year', models.IntegerField(default=0)),
                ('status', models.IntegerField(choices=[(0, 'Sold'), (1, 'In Stock')], default=0)),
                ('transmission', models.IntegerField(choices=[(0, 'Manual'), (1, 'Automatic')], default=0)),
                ('price', models.DecimalField(decimal_places=2, default=Decimal('0'), max_digits=20)),
                ('horse_power', models.DecimalField(decimal_places=2, default=Decimal('0'), max_digits=20)),
                ('propellant', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='CarImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='default.jpg', upload_to='')),
                ('car', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='image_feild', to='car.Car')),
            ],
        ),
        migrations.CreateModel(
            name='Manufactor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='ManufactorModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
    ]
