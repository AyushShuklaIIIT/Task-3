import express from 'express'
import { v4 as uuidv4} from 'uuid';
const app = express();
const port = 3000;

let books = [
  { id: uuidv4(), title: "Atomic Habits", author: "James Clear" },
  { id: uuidv4(), title: "The Alchemist", author: "Paulo Coelho" },
  { id: uuidv4(), title: "Deep Work", author: "Cal Newport" },
  { id: uuidv4(), title: "1984", author: "George Orwell" },
  { id: uuidv4(), title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas" }
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
})

app.get('/books', (req, res) => {
    res.status(200).json(books);
})

app.post('/books', (req, res) => {
    const { title, author} = req.body;
    if(!title || !author) {
        return res.status(400).json({ error: 'Title and Author are required.' });
    }
    const newBook = { id: uuidv4(), title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;
    const book = books.find((book) => book.id === id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found.' });
    }
    if (title) {
        book.title = title;
    }
    if (author) {
        book.author = author;
    }
    res.status(200).json(book);
})

app.delete('/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find((book) => book.id === id);
    if(!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    books = books.filter((book) => book.id !== id);
    res.json({ message: 'Book deleted successfully.' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})