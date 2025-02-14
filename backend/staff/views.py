from django_filters import rest_framework as filters
from rest_framework import generics

from staff.models import Staff
from staff.serializers import StaffSerializer


class StaffFilter(filters.FilterSet):
    id = filters.NumberFilter()
    first_name = filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Staff
        fields = [
            'id',
            'name',
            'first_name',
            'surname',
            'patronymic',
            'specialization',
        ]


class StaffListView(generics.ListAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = StaffFilter


class StaffDetailView(generics.RetrieveAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
