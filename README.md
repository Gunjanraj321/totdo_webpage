# ToDo Webpage
This project is a simple Todo application built with the MERN stack (MongoDB, Express, React, Node.js). The application allows users to create, read, update, and delete (CRUD) todo items, with additional functionality for marking todos as completed. Users can also upload an image with each todo item.

## Features
- Create a new todo with a title, description, date to complete, and an optional image.
- View all todos.
- Edit an existing todo.
- Delete a todo.
- Mark a todo as completed.

## Technology Used
# Backend:

- Node.js: Runtime environment for server-side application.
- Express.js: Web application framework for Node.js, providing a robust set of features for web and mobile applications.
- MongoDB (with Mongoose): NoSQL database for storing todo task.

- ## Frontend:

- React.js: JavaScript library for building user interfaces, facilitating the creation of interactive UI components.
- Tailwind CSS: Utility-first CSS framework used for styling the todo application, providing rapid styling without the need for custom CSS.


### REST API Endpoints
The backend uses RESTful APIs for communication between the client and server. Below are the main endpoints:

- **POST /api/todos :** Creates a new todo.
- **GET /api/todos/:id :** fetch all todo task.
- **PUT /api/todos/:id  :** Updates a specific todo entirely (replaces it).
- **PATCH  /api/todos/:id :** Updates a specific todo to markasdone.
- **DELETE  /api/todos/:id  :** Deletes a specific todo by its ID

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your machine.
- A non-relational database configured and running.

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Gunjanraj321/totdo_webpage.git
    cd backend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Set up the environment variables:
    - Create a `.env` file in the root directory.
    - Add the following environment variables:
      ```env
      PORT=3000
      MONGODB_URI=mongodb://localhost:27017/todoapp
      IAM_USER_KEY=your_aws_access_key_id
      IAM_USER_SECRET=your_aws_secret_access_key
      BUCKET_NAME=your_bucket_name
      ```

4. Start the server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React application:
    ```bash
    npm start
    ```




  
