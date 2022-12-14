from django.db import models
from django.core.validators import MinValueValidator
from users.models import User


class Procedure(models.Model):

    name = models.CharField(
        'название',
        max_length=50,
    )
    price = models.IntegerField(
        verbose_name='Цена',
        validators=[MinValueValidator(0)]
    )

    def __str__(self):
        return f'{self.name}. {self.price}'

    class Meta:
        verbose_name = 'Процедура'
        verbose_name_plural = 'Процедуры'


class Employee(models.Model):

    name = models.CharField(
        'Имя',
        max_length=50
    )
    surname = models.CharField(
        'Фамилия',
        max_length=80
    )
    procedures = models.ForeignKey(
        Procedure,
        on_delete=models.CASCADE,
        related_name='masters',
    )

    def __str__(self):
        return f'{self.name} {self.surname} - {self.procedures}'

    class Meta:
        verbose_name = 'Работник'
        verbose_name_plural = 'Работники'


class Salon (models.Model):

    salon_name = models.CharField(
        'Название',
        max_length=50
    )
    address = models.CharField(
        'Адрес',
        max_length=100,
        blank=True
    )
    employees = models.ManyToManyField(
        Employee,
        through='Appointment',
        through_fields=('salons', 'employees'),
        related_name='salons'
    )

    def __str__(self):
        return f'{self.salon_name} {self.address} - {self.employees}'

    class Meta:
        verbose_name = 'Салон'
        verbose_name_plural = 'Салоны'


class Appointment(models.Model):

    MONDAY = 'Mo'
    TUESDAY = 'Tu'
    WEDNESDAY = 'We'
    THURSDAY = 'Td'
    FRIDAY = 'Fr'
    SATURDAY = 'Sa'
    SUNDAY = 'Su'

    DAYS_OF_WEEK = [
        (MONDAY, 'Пн'),
        (TUESDAY, 'Вт'),
        (WEDNESDAY, 'Ср'),
        (THURSDAY, 'Чт'),
        (FRIDAY, 'Пт'),
        (SATURDAY, 'Сб'),
        (SUNDAY, 'Вс')
    ]

    employees = models.ForeignKey(
        Employee,
        on_delete=models.CASCADE,
        related_name='appointments'
    )
    salons = models.ForeignKey(
        Salon,
        on_delete=models.CASCADE,
        related_name='appointments'
    )
    day_of_week = models.CharField(
        max_length=20,
        verbose_name='Рабочие дни',
        choices=DAYS_OF_WEEK,
        blank=True
    )

    def __str__(self):
        return f'{self.day_of_week} {self.employees}'

    class Meta:
        verbose_name = 'Приём'
        verbose_name_plural = 'Приёмы'


class Order(models.Model):
    customer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='users'
    )


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name='orders'
    )
    service = models.ForeignKey(
        Appointment,
        on_delete=models.CASCADE,
        related_name='appointments'
    )
