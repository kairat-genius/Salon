from datetime import datetime

from rest_framework import serializers

from staff.models import Staff


class StaffSerializer(serializers.ModelSerializer):
    photo = serializers.SerializerMethodField()
    experience = serializers.SerializerMethodField()

    class Meta:
        model = Staff
        fields = [
            'id',
            'name',
            'first_name',
            'surname',
            'patronymic',
            'specialization',
            'photo',
            'experience'
        ]

    def get_photo(self, obj):
        return obj.photo.url
    def get_experience(self, obj):
        current_year = datetime.now().year
        experience = current_year - obj.career_start_year
        return experience
