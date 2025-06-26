# Task-3

This project is a simple RESTful API built with Node.js and Express that allows you to manage a collection of books. The API lets you:

- View a list of books (`GET /books`)
- Add a new book (`POST /books`)
- Update an existing book (`PUT /books/:id`)
- Delete a book (`DELETE /books/:id`)

Each book has a unique ID, title, and author. The backend uses an in-memory array to store the books and demonstrates basic CRUD operations.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node index.js
   ```

3. The API will be available at `http://localhost:3000/`.

## Endpoints

- `GET /books` - Returns the list of all books.
- `POST /books` - Adds a new book (send `title` and `author` in the request body).
- `PUT /books/:id` - Updates an existing book by ID.
- `DELETE /books/:id` - Deletes a book by ID.

---
