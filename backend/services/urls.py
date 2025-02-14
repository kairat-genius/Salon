from django.urls import path

from services.views import (CategoryDetailView, CategoryListView,
                            ServiceDetailView, ServiceListView,
                            SaleDetailView, SaleListView)

urlpatterns = [
    path(
        'service/',
        ServiceListView.as_view(),
        name='service-list',
    ),
    path(
        'service/<int:pk>/',
        ServiceDetailView.as_view(),
        name='service-detail'
    ),
    path(
        'category/',
        CategoryListView.as_view(),
        name='category-list'
    ),
    path(
        'category/<int:pk>/',
        CategoryDetailView.as_view(),
        name='category-detail'
    ),
    path(
        'sales/',
        SaleListView.as_view(),
        name='sale-list'
    ),
    path(
        'sales/<int:pk>/',
        SaleDetailView.as_view(),
        name='sale-detail'
    ),
]
