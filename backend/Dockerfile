FROM python:3.13

RUN apt-get update && apt-get install -y \
    libpq-dev \
    gcc

WORKDIR /app/backend
COPY requirements.txt /app/backend/requirements.txt
RUN pip install --upgrade pip setuptools wheel gunicorn
RUN pip install -r /app/backend/requirements.txt
COPY . /app/backend
RUN python manage.py collectstatic --noinput

EXPOSE 8000