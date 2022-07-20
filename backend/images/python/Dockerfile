FROM --platform=linux/amd64 python:3.8-buster

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

ENV DOCKER_CONTENT_TRUST 1

COPY ./config/requirements.txt /app/requirements.txt

RUN pip install --upgrade pip \
    && pip install wheel \
    && pip install -r requirements.txt \
    && pip cache purge

ADD . /app

ARG APP_ID=1000

RUN groupadd -g "$APP_ID" app \
  && useradd -g "$APP_ID" -u "$APP_ID" -d /app -s /bin/bash app

USER app:app