# BlogAPI

A RESTful API for managing blogs and categories using Node.js, Express, Sequelize, and MySQL.  
Supports UUID-based identification, Swagger documentation, and EJS homepage with available routes.

---

## Folder Structure

```
BlogAPI/
│
├── config/
│   └── db.js                # Database connection and sync logic
│
├── controller/
│   └── blogController.js    # Blog and category controller functions
│
├── models/
│   └── blogModel.js         # Sequelize models for Blog and 
│
├── routes/
│   └── blogRoute.js         # Express routes for blogs and categories
│
├── swagger/
│   └── swagger.json         # OpenAPI documentation for the API
│
├── views/
│   └── index.ejs            # EJS homepage listing available API 
├── .env                     # Environment variables (do not commit)
├── .env_Example             # Example env file for setup
├── server.js                # Main Express server file
├── README.md                # Project documentation
└── package.json             # Node.js dependencies and scripts
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd BlogAPI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

- Copy `.env_Example` to `.env` and fill in your MySQL credentials:

```bash
cp .env_Example .env
```

Example:
```
PORT=8000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=admin
DB_NAME=blogsite_db
```

### 4. Start MySQL and create the database

Create a database named `blogsite_db` in your MySQL server.

### 5. Run the server

```bash
npm start
```
or
```bash
node server.js
```

---

## API Documentation

- **Swagger UI:** [http://localhost:8000/api-docs](http://localhost:8000/api-docs)
- **Homepage:** [http://localhost:8000/](http://localhost:8000/)

---

## Available Routes

> **Note:** You must create a category first before creating a blog.  
> Use `POST /api/blogs/addCategory` to add a category.

| Method | Route                       | Description                       |
|--------|----------------------------|-----------------------------------|
| POST   | `/api/blogs/addCategory`   | Add a new category                |
| GET    | `/api/blogs`               | List all blogs                    |
| POST   | `/api/blogs`               | Create a new blog                 |
| GET    | `/api/blogs/{uuid}`        | Get a blog by UUID                |
| PATCH  | `/api/blogs/{uuid}`        | Update a blog by UUID             |

See [Swagger UI](http://localhost:8000/api-docs) for detailed request/response schemas.

---

## Project Structure Overview

- **config/db.js**: Sets up Sequelize and connects to MySQL.
- **models/blogModel.js**: Defines Blog and BlogCategory models.
- **controller/blogController.js**: Contains logic for CRUD operations.
- **routes/blogRoute.js**: Maps API endpoints to controller functions.
- **swagger/swagger.json**: OpenAPI documentation for all endpoints.
- **views/index.ejs**: Homepage listing all API routes and usage notes.
- **server.js**: Main entry point, sets up Express, routes, Swagger, and EJS.

---

## License

@copy CopyRight PrashannDhami

---

##