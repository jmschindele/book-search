import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BookCard from "../components/BookCard"
class Saved extends Component {
  state = {
    title: "",
    books: [],
    authors: [],
    description: "",
    image: "",
    link: ""
  };


  componentDidMount() {
this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Books Dawg
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>

          <Col size="md-10 md-offset-1">

            {this.state.books.map(book => (
              <BookCard
               id={book._id}
               key={book._id}
               title={book.title}
               authors={book.authors}
               description={book.description}
               image={book.image}
               link={book.link}
               >
               <button onClick={() => this.removeBook(book._id)} > Delete </button> 
               </ BookCard>
            ))}

          </Col>
        </Row>

        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
