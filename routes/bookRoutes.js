// routes/bookRoutes.js
const express = require("express");
const {
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
} = require("../controllers/bookController");

const router = express.Router();

// General users routes
router.get("/books", getBooks); // Task 1
router.get("/books/isbn/:isbn", getBookByISBN); // Task 2
router.get("/books/author/:author", getBooksByAuthor); // Task 3
router.get("/books/title/:title", getBooksByTitle); // Task 4
router.get("/books/review/:isbn", getBookReview); // Task 5
router.post("/users/register", registerUser); // Task 6
router.post("/users/login", loginUser); // Task 7

// Registered user routes
router.post("/books/review/:isbn", addBookReview); // Task 8
router.delete("/books/review/:isbn/:user", deleteBookReview); // Task 9

// Async/Await & Promises routes
router.get("/async/books", getAllBooksAsync); // Task 10
router.get("/promise/isbn/:isbn", searchBookByISBNAwait); // Task 11
router.get("/async/author/:author", searchBookByAuthor); // Task 12
router.get("/async/title/:title", searchBookByTitle); // Task 13

module.exports = router;
