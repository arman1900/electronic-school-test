## Чтобы скачать проект c гитхаба запускаем команду:
 git clone https://github.com/arman1900/electronic-school-test.git

## Заходим в папку проекта

cd electronic-school-test 
## Разворачиваем проект используя maven
Перед тем как развернуть проект убедитесь что у вас локально имеется база данных mysql с названием test

mvn clean install

## Запускаем сервер Java spring
java -jar target/users-0.0.1-SNAPSHOT.jar

## Дальше устанавлиаем клиент 
откройте второй терминал и перейдите по папке ui
запустите команду npm install
## Запускаем клиент
npm start
## Ждём, когда запуститься сервер. После запуска сервера, заходим в браузере по адресу:
localhost:4200
## дальше логинимся user:admin password:admin
