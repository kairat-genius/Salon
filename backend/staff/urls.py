from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from staff.views import StaffDetailView, StaffListView

urlpatterns = [
    path('staff/', StaffListView.as_view(), name='employee-list-create'),
    path('staff/<int:pk>/', StaffDetailView.as_view(), name='staff-detail')
]

if settings.DEBUG:
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
