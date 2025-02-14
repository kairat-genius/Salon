from django.contrib import admin

from staff.models import Staff


class StaffAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
        'first_name',
        'surname',
        'patronymic',
        'specialization'
    )
    search_fields = []


admin.site.register(Staff, StaffAdmin)
