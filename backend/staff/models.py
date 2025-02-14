import requests
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
from django.db import models


class Staff(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(
        verbose_name='Имя-фамилия сотрудника',
        max_length=50
    )
    first_name = models.CharField(
        verbose_name='Имя сотрудника',
        max_length=50
    )
    surname = models.CharField(
        verbose_name='Фамилия сотрудника',
        max_length=50
    )
    patronymic = models.CharField(
        verbose_name='Отчество сотрудника',
        max_length=50
    )
    specialization = models.CharField(
        verbose_name='Профессия',
        max_length=50
    )
    photo = models.ImageField(
        upload_to='photos/',
        verbose_name='Фотография сотрудника',
        null=True,
        blank=True
    )
