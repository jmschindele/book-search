import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { SearchRow } from "../components/StyledRow";
import axios from 'axios';
class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: ""
  };


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    const key = 'AIzaSyDNy-1pxEVcBBjaXWR2gD5EZIOqNA9f-Kw';
    event.preventDefault();
    let title = this.state.title
    if (this.state.title) {
      let URL = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`;
      axios.get(URL)
      .then(function(res) {
        // console.log(res.data.items)
        // for (var i = 0; i < res.data.items.length; i++){
        //   console.log(res.data.items[i].volumeInfo.title)
        // }

        const arr = res.data.items
        const mapBooks = arr.map(n => 
          `
        Title: ${n.volumeInfo.title}
        Author(s): ${n.volumeInfo.authors}
        Description: ${n.volumeInfo.description}
        Image: ${n.volumeInfo.imageLinks.thumbnail}
        Link: ${n.volumeInfo.infoLink}
      `
        )
        console.log(mapBooks);
// expected output: Array [2, 8, 18, 32]

        // let results = res.data;
        // console.log('results are in ' + results)
        /*console.log(`
        Title: ${res.data.items[i].volumeInfo.title}
        Author(s): ${res.data.items[i].volumeInfo.authors}
        Description: ${res.data.items[i].volumeInfo.description}
        Image: ${res.data.items[i].volumeInfo.imageLinks.thumbnail}
        Link: ${res.data.items[i].volumeInfo.infoLink}
      `);
      this({
        title: res.data.items[i].volumeInfo.title,
        authors: res.data.items[i].volumeInfo.authors,
        description: res.data.items[i].volumeInfo.description,
        image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
        link: res.data.items[i].volumeInfo.infoLink
      }); */
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Google Books Search</h1>
              <p>Search for and Save Books of Interest</p>
            </Jumbotron>
            <SearchRow>
              <br />
              <h3>Book Search</h3>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!this.state.title}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
            <br />
            </SearchRow>
          </Col>
          <Col size="md-12">
            <Row>
              <List>

              </List>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
