FROM python:3.11.3-bullseye

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

EXPOSE 5001

CMD ["sh", "-c", "python3 models.py && python3 seed.py && python3 -m flask run --port 5001 --host 0.0.0.0"]
