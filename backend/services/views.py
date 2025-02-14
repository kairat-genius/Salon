from django_filters import rest_framework as filters
from rest_framework import generics

from services.models import Category, Service, Sale
from services.serializers import (CategorySerializer,
                                  ServiceSerializer,
                                  SaleSerializer)


class ServiceFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr='icontains')
    category = filters.NumberFilter()
    price_min = filters.NumberFilter()
    price_max = filters.NumberFilter()
    discount = filters.NumberFilter()
    comment = filters.CharFilter(lookup_expr='icontains')
    duration = filters.NumberFilter()

    class Meta:
        model = Service
        fields = [
            'title',
            'category',
            'price_min',
            'price_max',
            'discount',
            'comment',
            'duration'
        ]


class CategoryFilter(filters.FilterSet):
    id = filters.NumberFilter()
    title = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Category
        fields = [
            'id',
            'title'
        ]


class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ServiceFilter


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = CategoryFilter


class ServiceDetailView(generics.RetrieveAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class CategoryDetailView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class SaleListView(generics.ListAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer


class SaleDetailView(generics.RetrieveAPIView):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
