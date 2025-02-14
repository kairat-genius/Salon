import os

import requests
from django.core.management.base import BaseCommand

from services.models import Category, Service


class Command(BaseCommand):
    help = 'Update database'

    def handle(self, *args, **kwargs):

        headers = {
            'Authorization': f'Bearer {os.getenv("API_TOKEN")}',
            'User': os.getenv("USER_TOKEN"),
            'Accept': 'application/vnd.yclients.v2+json',
        }

        try:
            # Обновляем категории
            response = requests.get(
                f'{os.getenv("API_URL")}/service_categories/1193779/',
                headers=headers
            )
            response.raise_for_status()  # Поднимает HTTPError для плохих ответов
            categories_data = response.json().get('data')

            for item in categories_data:
                category_data = {
                    'id': item['id'],
                    'title': item['title'],
                }

                # Параметры, по которым будет осуществляться поиск
                lookup_params = {
                    'id': category_data['id'],
                }

                category_obj, created = Category.objects.update_or_create(
                    **lookup_params,
                    defaults=category_data
                )

                if created:
                    print(f'Создан новый объект: {category_obj.title}')
                else:
                    print(f'Обновлен существующий объект: {category_obj.title}')

            # Обновляем услуги
            response = requests.get(
                f'{os.getenv("API_URL")}/services/1193779/',
                headers=headers
            )
            response.raise_for_status()  # Поднимает HTTPError для плохих ответов
            services_data = response.json().get('data')

            for item in services_data:
                service_data = {
                    'id': item['id'],
                    'title': item['title'],
                    'category_id': item['category_id'],
                    'price_min': item['price_min'],
                    'price_max': item['price_max'],
                    'discount': item.get('discount', 0),
                    'comment': item.get('comment', ''),
                    'duration': item.get('duration', 0),
                }

                # Параметры, по которым будет осуществляться поиск
                lookup_params = {
                    'id': service_data['id'],
                }

                service_obj, created = Service.objects.update_or_create(
                    **lookup_params,
                    defaults=service_data
                )

                if created:
                    print(f'Создан новый объект: {service_obj.title}')
                else:
                    print(f'Обновлен существующий объект: {service_obj.title}')

        except requests.exceptions.RequestException as e:
            print(f'Ошибка при выполнении запроса: {e}')

# {
#     'booking_title': 'Традиционный тайский массаж',
#     'tax_variant': None,
#     'vat_id': None,
#     'print_title': 'Тайский массаж 60',
#     'service_type': 1,
#     'api_service_id': 0,
#     'repeat_visit_days_step': None,
#     'seance_search_start': 0,
#     'seance_search_finish': 86400,
#     'seance_search_step': 900,
#     'step': 0,
#     'is_need_limit_date': False,
#     'date_from': '0000-00-00',
#     'date_to': '0000-00-00',
#     'schedule_template_type': 2,
#     'online_invoicing_status': 0,
#     'is_abonement_autopayment_enabled': 0,
#     'autopayment_before_visit_time': 0,
#     'abonement_restriction_value': 0,
#     'is_chain': False,
#     'is_price_managed_only_in_chain': False,
#     'is_comment_managed_only_in_chain': False,
#     'price_prepaid_amount': 0,
#     'price_prepaid_percent': 100,
#     'is_composite': False,
#     'id': 18005204,
#     'salon_service_id': 20300931,
#     'title': 'Традиционный тайский массаж: 60мин.',
#     'category_id': 18005202,
#     'price_min': 3800,
#     'price_max': 0,
#     'discount': 0,
#     'comment': 'Эмоциональное и физическое омоложение организма',
#     'weight': 19,
#     'active': 1,
#     'api_id': '',
#     'prepaid': 'forbidden',
#     'is_multi': False,
#     'capacity': 0,
#     'image_group': [],
#     'staff': [
#         {
#             'id': 3632794,
#             'seance_length': 3600,
#             'technological_card_id': 0,
#             'image_url': 'https://be.cdn.yclients.com/images/no-master-sm.png',  # noqa
#             'price': None,
#             'name': 'Магрипа Харипуллаевна'
#         }
#             ],
#     'dates': [],
#     'duration': 3600,
#     'resources': [],
#     'is_online': True
# }
