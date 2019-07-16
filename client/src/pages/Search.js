import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { SearchRow } from "../components/StyledRow";
import BookCard from "../components/BookCard";
import SearchResults from "../components/SearchResults"
// import axios from 'axios';


class Search extends Component {
    constructor(props) {
        super(props);
    

  this.state = {
    // search: "",
    books: [],
    title: "",
    authors: [],
    description: "",
    image: "",
    link: ""
  };
this.handleAddClick = this.handleAddClick.bind(BookCard)
    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.title)
        .then(res => {
            console.log(res.data.items);
            this.setState({books: [...res.data.items]})
            })
        .catch(err => console.log(err));
    }


    handleAddClick = event => {
        event.preventDefault();
        console.log('itsa me, the click handler!')
        // let { title, authors, description, imageLinks} = book.volumeInfo;
        this.state.books.map(book => {
            return(
            this.setState(
            this.key = book._id,
            this.id = book._id,
            this.title = book.volumeInfo.title,
            this.authors = book.volumeInfo.authors,
            this.description = book.volumeInfo.description,
            this.image = book.volumeInfo.imageLinks
            ))
        })
        console.log(this.title, this.authors, this.description, this.image)
        API.saveBook({
            title : this.title,
            authors : this.authors,
            description : this.description,
            image : this.imageLinks
        })
        .then(res => alert('add successful'))
        .catch(err => console.log(err));
    }


  render() {
    return (
        
        <>
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
              {/* <List> */}
<SearchResults
    books={this.state.books}
    onClick={this.handleAddClick}
    />
              {/* </List> */}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Search;

