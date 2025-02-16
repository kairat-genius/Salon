# For more information, please refer to https://aka.ms/vscode-docker-python
FROM python:3.11

EXPOSE 8000

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt

RUN apt-get update && apt-get install -y dos2unix

WORKDIR /app
COPY . /app

RUN dos2unix /app/init.sh
RUN chmod +x /app/init.sh

# During debugging, this entry point will be overridden. For more information, please refer to https://aka.ms/vscode-docker-python-debug
CMD ["/bin/sh", "-c", "/app/init.sh && gunicorn --bind 0.0.0.0:8000 backend.wsgi"]