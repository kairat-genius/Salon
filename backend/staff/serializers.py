from rest_framework import serializers

from staff.models import Staff


class StaffSerializer(serializers.ModelSerializer):
    photo = serializers.ImageField(use_url=True)

    class Meta:
        model = Staff
        fields = [
            'id',
            'name',
            'first_name',
            'surname',
            'patronymic',
            'specialization',
            'photo'
        ]
