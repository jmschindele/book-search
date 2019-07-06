import axios from "axios";

const key = 'AIzaSyDNy-1pxEVcBBjaXWR2gD5EZIOqNA9f-Kw';
let title = "cheers";
const URL =`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`
console.log(URL)



export default {
  googleBooks: function(props) {
    // let title = this.state.title;
    return axios.get(URL)
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
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
