const books = require("../data");
const axios = require("axios");

// Task 1: Get the book list available in the shop
const getBooks = async (req, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Error fetching books." });
  }
};

// Task 2: Get the books based on ISBN
const getBookByISBN = (req, res) => {
  const { isbn } = req.params;
  const book = books.find((book) => book.isbn === isbn);
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Task 3: Get all books by Author
const getBooksByAuthor = (req, res) => {
  const { author } = req.params;
  const result = books.filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No books found by that author" });
  }
};

// Task 4: Get all books based on Title
const getBooksByTitle = (req, res) => {
  const { title } = req.params;
  const result = books.filter(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
  if (result.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No books found with that title" });
  }
};

// Task 5: Get book Review
const getBookReview = (req, res) => {
  const { isbn } = req.params;
  const book = books.find((book) => book.isbn === isbn);
  if (book && book.reviews) {
    res.status(200).json(book.reviews);
  } else {
    res.status(404).json({ message: "Reviews not found for this book" });
  }
};

// Task 6: Register New User
const registerUser = (req, res) => {
  // For simplicity, we're just returning a success message
  res.status(201).json({ message: "User registered successfully" });
};

// Task 7: Login as a Registered User
const loginUser = (req, res) => {
  // For simplicity, we're returning a success message
  res.status(200).json({ message: "User logged in successfully" });
};

// Task 8: Add/Modify a book review
const addBookReview = (req, res) => {
  const { isbn } = req.params;
  const { user, comment } = req.body;
  const book = books.find((book) => book.isbn === isbn);
  if (book) {
    book.reviews.push({ user, comment });
    res.status(200).json({ message: "Review added/updated" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Task 9: Delete book review added by that particular user
const deleteBookReview = (req, res) => {
  const { isbn, user } = req.params;
  const book = books.find((book) => book.isbn === isbn);
  if (book) {
    book.reviews = book.reviews.filter((review) => review.user !== user);
    res.status(200).json({ message: "Review deleted" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Async/Await methods for Node.js tasks
// Task 10: Get All Books using async callback function
const getAllBooksAsync = async (req, res) => {
  res.status(200).json(books);
};

// Task 11: Search by ISBN using Promises
const searchBookByISBNAwait = async (req, res) => {
  const { isbn } = req.params;
  return new Promise((resolve, reject) => {
    const book = books.find((book) => book.isbn === isbn);
    if (book) {
      resolve(book);
    } else {
      reject({ message: "Book not found" });
    }
  })
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(404).json(err));
};

// Task 12: Search by Author
const searchBookByAuthor = async (req, res) => {
  const { author } = req.params;
  const booksByAuthor = books.filter(
    (book) => book.author.toLowerCase() === author.toLowerCase()
  );
  res.status(200).json(booksByAuthor);
};

// Task 13: Search by Title
const searchBookByTitle = async (req, res) => {
  const { title } = req.params;
  const booksByTitle = books.filter(
    (book) => book.title.toLowerCase() === title.toLowerCase()
  );
  res.status(200).json(booksByTitle);
};

module.exports = {
  getBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
  getBookReview,
  registerUser,
  loginUser,
  addBookReview,
  deleteBookReview,
  getAllBooksAsync,
  searchBookByISBNAwait,
  searchBookByAuthor,
  searchBookByTitle,
};
