from rest_framework import serializers

from services.models import Category, Service, Sale


class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = '__all__'


class CategoryNestedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'sale_photo']


class ServiceSerializer(serializers.ModelSerializer):
    category = CategoryNestedSerializer(read_only = True)

    class Meta:
        model = Service
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    services = ServiceSerializer(many = True, read_only = True)
    sales = SaleSerializer(many = False, read_only = True)
    sale_photo = serializers.SerializerMethodField()

    def get_sale_photo(self, obj):
        # Проверяем, есть ли фото у объекта
        if obj.sale_photo:
            return obj.sale_photo.url
        # Если фото нет, возвращаем None
        return None

    class Meta:
        model = Category
        fields = '__all__'


class CategoryForSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'title', 'sale_photo']


class ServiceForSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        exclude = ['category']
