const books = [
  {
    ISBN: "123book",
    title: "Harry Potter",
    pubDate: "2018-05-05",
    numPage: 100,
    language: "english",
    authors: [1, 2],
    publications: [1],
    category: ["adventure", "mystery"],
  },
  {
    ISBN: "456book",
    title: "Maze Runner",
    pubDate: "2019-05-05",
    numPage: 250,
    language: "hindi",
    authors: [2],
    publications: [1],
    category: ["thriller", "mystery"],
  },
];

const authors = [
  {
    id: 1,
    name: "Rowling",
    books: ["123"],
  },
  {
    id: 2,
    name: "Ashwin",
    books: ["456"],
  },
];

const publications = [
  {
    id: 1,
    name: "HSB Books",
    books: ["123"],
  },
];

module.exports = { books, authors, publications };
