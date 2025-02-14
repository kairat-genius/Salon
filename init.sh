#!/bin/bash
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate

docker-compose exec backend bash -c "python manage.py shell -c \"from django.contrib.auth.models import User; User.objects.create_superuser('admin', 'admin@example.com', 'admin') if not User.objects.filter(username='admin').exists() else print('Суперпользователь уже зарегистрирован.')\""


docker-compose exec backend python manage.py update_staff
docker-compose exec backend python manage.py update_price
