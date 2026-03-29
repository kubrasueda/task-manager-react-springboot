# Task Manager App

This is a simple full-stack task manager application built with React and Spring Boot.

## Features

* Add new tasks
* View all tasks
* Mark tasks as completed
* Delete tasks

## Technologies Used

* React (Frontend)
* JavaScript
* Spring Boot (Backend)
* H2 Database
* Maven

## Project Structure

* task-frontend → React frontend
* task-backend → Spring Boot backend

## How It Works

The frontend sends HTTP requests to the backend.
The backend processes the requests and stores the data in the H2 database.

This project was created as a learning exercise to understand full-stack development.

## How to Run the Project

### Backend

```bash
cd task-backend
mvnw spring-boot:run
```

### Frontend

```bash
cd task-frontend
npm install
npm run dev
```

Then open:
http://localhost:5173

## Screenshots

(Add your screenshot here later)

## Future Improvements

* Add edit task feature
* Improve UI design
* Add categories or filters
