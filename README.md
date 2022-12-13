# BeautyCity

Сайт для сети салонов красоты "Beauty City", действующих под единой франшизой.
Здесь можно записаться на прием к косметелогу в удобное для себя время.

На сайте есть несколько независимых интерфейсов:

![Главная](https://i.ibb.co/NKKZqj0/Screenshot-from-2022-12-14-00-06-37.png)
![Главная. Услуги](https://i.ibb.co/SPJcXYd/Screenshot-from-2022-12-14-00-06-48.png)
![Главная. Отзывы и контакты](https://i.ibb.co/crbS2Ff/Screenshot-from-2022-12-14-00-06-58.png)


#### Первый - главная страница, где пользователь может ознакомиться с перечнем услуг, салонами, мастерами и отзывами,оставленными другими клиентами.
---

![Запись на услугу](https://i.ibb.co/gV4bspQ/Screenshot-from-2022-12-14-00-13-28.png)
![Запись на услуги](https://i.ibb.co/WcJPqxP/Screenshot-from-2022-12-14-00-20-34.png)


Второй - страница записи на услугу, где пользователь может записаться на прием, выбрав салон,
 услугу, мастера, дату и время.

---
![Панель администратора](https://i.ibb.co/gDdDnW5/Screenshot-from-2022-12-14-00-15-49.png)


Третий - панель администратора, где доступна статистика регистраций, посещений, выручки.

---
#### TODO: сделать скрин
Четвертый - личная страница
 пользователя, где можно посмотреть историю посещений и изменить свои данные.

---

Регистрация пользователя осуществляется по номеру телефона.

### Как запустить dev-версию сайта
Скачайте код:
```shell
git clone https://github.com/YungIshimura/BeautyCity.git
```

Перейдите в каталог проекта:
```shell
cd BeautyCity
```

[Установите Python](https://www.python.org/), если этого ещё не сделали.
**Важно!** Версия Python должна быть не ниже 3.8.

Проверьте, что python установлен и корректно настроен. Запустите его в командной строке:

```shell
python --version
```

Возможно, вместо команды python здесь и в остальных инструкциях этого README придётся использовать python3.
Зависит это от операционной системы и от того, установлен ли у вас Python старой второй версии.

В каталоге проекта создайте виртуальное окружение:

```shell
python -m venv venv
```
Активируйте его. На разных операционных системах это делается разными командами:

```shell
Windows: .\venv\Scripts\activate
MacOS/Linux: source venv/bin/activate
```

Установите зависимости в виртуальное окружение:

```shell
pip install -r requirements.txt
```

Создайте файл .env в каталоге BeautyCity/

Определите переменную окружения SECRET_KEY, записав её в `.env`.
Запишите любой [сгенерированный ключ](https://www.allkeysgenerator.com/Random/Security-Encryption-Key-Generator.aspx):
```shell
SECRET_KEY = '***'
```

Установите postgresql, если еще не установлен.

[Создайте базу данных](https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-20-04#prerequisites)

Запишите url в `.env` в виде:
```shell
DB_URL = 'postgres://имя_пользователя:пароль@хост/имя_бд'
```

Сделайте миграцию базы данных:
```shell
./manage.py migrate
```

Запустите сервер:
```shell
./manage.py runserver
```

Теперь зайти на страницу http://127.0.0.1:8000/


