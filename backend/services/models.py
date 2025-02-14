from django.db import models


class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=255)
    sale_photo = models.ImageField(
        upload_to='sales/',
        verbose_name='Фото для акции',
        null=True,
        blank=True
    )

    def __str__(self):
        return self.title


class Service(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(verbose_name='Название', max_length=255)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name='services'
    )
    price_min = models.IntegerField(verbose_name='Цена от')
    price_max = models.IntegerField(verbose_name='Цена до')
    discount = models.IntegerField(verbose_name='Скидка')
    comment = models.CharField(verbose_name='Описание', max_length=255)
    duration = models.IntegerField(verbose_name='Длительность')

    def __str__(self):
        return self.title


class Sale(models.Model):
    category = models.OneToOneField(
        Category,
        on_delete=models.CASCADE,
        related_name='sales',

    )
    text = models.CharField(
        verbose_name='Текст акции',
        max_length=255
    )
    new_price = models.IntegerField(verbose_name='Новая цена')

    def __str__(self):
        return self.text
