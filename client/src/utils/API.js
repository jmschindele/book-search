import axios from "axios";

const key = 'AIzaSyDNy-1pxEVcBBjaXWR2gD5EZIOqNA9f-Kw';
// let title = "cheers";
// const URL =`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`
// console.log(URL)

export default {
  //hits google api for book search
  searchBooks: function(title) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`)
  },
  //saves a book to the database
  saveBook: function(bookData) {
    console.log('saved :',bookData)
    return axios.post("/api/books", bookData)
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
