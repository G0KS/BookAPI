const express = require("express");

//Database
const datatbase = require("./database");

//initialization
const bookAPI = express();

/*
Route           /
Description     Get all books
Access          PUBLIC
Parameter       NONE
Methods         GET
 */
bookAPI.get("/", (req, res) => {
  return res.json({ books: datatbase.books });
});

/*
Route           /is
Description     Get specific book based on ISBN
Access          PUBLIC
Parameter       isbn
Methods         GET
 */
bookAPI.get("/is/:isbn", (req, res) => {
  const getSpecificBook = datatbase.books.filter(
    (book) => book.ISBN === req.params.isbn
  );

  if (getSpecificBook.length === 0) {
    return res.json({
      error: `No book found for the ISBN of ${req.params.isbn}`,
    });
  }

  return res.json({ book: getSpecificBook });
});

/*
Route           /c
Description     Get specific book based on category
Access          PUBLIC
Parameter       category
Methods         GET
 */
bookAPI.get("/c/:category", (req, res) => {
  const getSpecificBook = datatbase.books.filter((book) =>
    book.category.includes(req.params.category)
  );

  if (getSpecificBook === 0) {
    return res.json({
      error: `No book found in the category ${req.params.category}`,
    });
  }

  return res.json({ book: getSpecificBook });
});

/*
Route           /l
Description     Get specific book based on language
Access          PUBLIC
Parameter       language
Methods         GET
 */
bookAPI.get("/l/:language", (req, res) => {
  const getSpecificBook = datatbase.books.filter(
    (book) => book.language === req.params.language
  );

  if (getSpecificBook.length === 0) {
    return res.json({
      error: `No book found in ${req.params.language} language`,
    });
  }

  return res.json({ bookAPI: getSpecificBook });
});

/*
Route           /author
Description     Get all authors
Access          PUBLIC
Parameter       NONE
Methods         GET
 */
bookAPI.get("/author", (req, res) => {
  return res.json({ authors: datatbase.authors });
});

/*
Route           /author
Description     Get all authors
Access          PUBLIC
Parameter       id
Methods         GET
 */
bookAPI.get("/author/:id", (req, res) => {
  const getSpecificAuthor = datatbase.authors.filter((author) => {
    author.id === req.params.id;
  });

  if (getSpecificAuthor === 0) {
    return res.json({ error: `No author found with id ${req.params.id}` });
  }

  return res.json({ authors: getSpecificAuthor });
});

bookAPI.listen(3000, () => console.log("Server is on run"));
