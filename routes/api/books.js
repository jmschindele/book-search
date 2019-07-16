const router = require("express").Router();
const booksController = require("../../controllers/booksController");

const key = 'AIzaSyDNy-1pxEVcBBjaXWR2gD5EZIOqNA9f-Kw'
let title = '';
const URL =`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
