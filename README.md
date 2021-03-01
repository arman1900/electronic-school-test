## 1.0 Чтобы скачать проект c гитхаба запускаем команду:
 git clone https://github.com/arman1900/electronic-school-test.git

## 2.0 Заходим в папку проекта

cd electronic-school-test 
## 3.0 Перед тем как развернуть проект
убедитесь что у вас локально имеется база данных mysql с названием test, также укажите user и password от mysql в папке которая находится в следующем пути: src/main/resources/application.properties
## 3.1 Разворачиваем проект используя maven
mvn clean install

## 4.0 Запускаем сервер Java spring
java -jar target/users-0.0.1-SNAPSHOT.jar

## 5.0 Дальше устанавлиаем клиент 
откройте второй терминал и перейдите по папке ui
запустите команду npm install
## 6.0 Запускаем клиент
npm start
## 7.0 Ждём, когда запуститься сервер. После запуска сервера, заходим в браузере по адресу:
localhost:4200
дальше логинимся user:admin password:admin
