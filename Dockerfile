# Устанавливаем базовый образ Node.js
FROM node:18.12.0-alpine as build
# Указываем рабочую директорию
WORKDIR /app
# Копируем package.json и package-lock.json в контейнер
COPY package*.json ./
# Устанавливаем npm
RUN npm install
# Устанавливаем зависимости
#RUN npm ci --only=production
# Копируем исходный код в контейнер
COPY . .
# Собираем фронтенд
RUN npm run build
# Указываем директорию для хранения собранного фронтенда
WORKDIR /app/build
# Открываем порт для доступа к собранному фронтенду
EXPOSE 3000
# Команда для запуска фронтенда
CMD ["npm", "start"]
