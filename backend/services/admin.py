from django.contrib import admin

from services.models import Category, Service, Sale


class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'sale_photo'
    )
    search_fields = []


class ServiceAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'price_min',
        'price_max',
        'duration',
        'category_id',
        'discount',
        'comment',
        'duration',
    )
    search_fields = []


class SaleAdmin(admin.ModelAdmin):
    list_display = (
        'category',
        'text',
        'new_price',
    )
    search_fields = []


admin.site.register(Category, CategoryAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Sale, SaleAdmin)
