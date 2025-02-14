import os

import requests
from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
from django.core.management.base import BaseCommand

from staff.models import Staff


class Command(BaseCommand):
    help = 'Update staff database'

    def handle(self, *args, **kwargs):
        headers = {
            'Authorization': f'Bearer {os.getenv("API_TOKEN")}',
            'User': os.getenv("USER_TOKEN"),
            'Accept': 'application/vnd.yclients.v2+json',
        }

        try:
            # Получаем данные сотрудников
            response = requests.get(
                f'{os.getenv("API_URL")}/staff/1193779/',
                headers=headers
            )
            response.raise_for_status()
            response_data = response.json().get('data')

            for staff in response_data:
                staf = {
                    'id': staff['id'],
                    'name': staff.get('name', ''),
                    'first_name': staff.get('first_name', ''),
                    'surname': staff.get('surname', ''),
                    'patronymic': staff.get('patronymic', ''),
                    'specialization': staff.get('specialization', ''),
                    'photo_url': staff.get('avatar_big', ''),
                }

                # Обработаем фото
                response = requests.get(staf['photo_url'])
                del staf['photo_url']
                response.raise_for_status()
                img_temp = NamedTemporaryFile(delete=True)
                img_temp.write(response.content)
                img_temp.flush()
                staf['photo'] = File(
                    img_temp,
                    name=f"{staf['id']}_photo.jpg"
                )

                lookup_params = {
                    'id': staf['id'],
                }

                existing_staff = Staff.objects.filter(**lookup_params).first()
                if existing_staff and existing_staff.photo:
                    # Удаляем старую фотографию, если она существует
                    if os.path.isfile(existing_staff.photo.path):
                        os.remove(existing_staff.photo.path)

                staff_obj, created = Staff.objects.update_or_create(
                    **lookup_params,
                    defaults=staf
                )

                if created:
                    print(f'Создан новый объект: {staff_obj.name}')
                else:
                    print(f'Обновлен существующий объект: {staff_obj.name}')
        except requests.exceptions.RequestException as e:
            print(f'Ошибка при выполнении запроса: {e}')
