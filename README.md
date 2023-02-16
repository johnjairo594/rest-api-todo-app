# RESTful API for Todo App
***
## Technologies used

- Laravel
- Vue.js
- PostgreSQL
- Docker
- Kool
___
## Prerequisites
- Docker
- Kool 
- node.js
- npm
___
## Getting started
### Start API services
~~~ 
kool run setup
~~~
Start docker containers, run composer install and run artisan key:generate.

### Enter to php container to run migrations
~~~
docker exec -it todo-api-app-1 bash
~~~
~~~
php artisan migrate
~~~

You can see the routes for CRUD running 
~~~
php artisan route:list
~~~
#### Exit the container 
~~~ 
exit
~~~
### Move to fronted directory 

~~~
cd fronted
~~~

### Install dependencies 

~~~
npm install
~~~

### Start the server

~~~
npm run serve
~~~
App will run at http://localhost:8080/ 

## Captures
***
#### Routes
![route-list.png](frontend%2Fsrc%2Fassets%2Froute-list.png)

### Home view
![home-view.png](frontend%2Fsrc%2Fassets%2Fhome-view.png)

### Create view
![create-view.png](frontend%2Fsrc%2Fassets%2Fcreate-view.png)

### Edit view
![edit-view.png](frontend%2Fsrc%2Fassets%2Fedit-view.png)

### Detele
![delete-todo.png](frontend%2Fsrc%2Fassets%2Fdelete-todo.png)
