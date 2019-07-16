import React, { Component } from "react";
import "./ListItem";

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.books.map((book, i) => {
          let { title, imageLinks, infoLink } = book.volumeInfo;
          return (
            <li>
              <a key={i} className="book" href={infoLink} target="_blank">
                <img
                  src={
                    undefined !== imageLinks ? imageLinks.thumbnail : { title }
                  }
                  alt="book image"
                  className="bookCover"
                />
                <header>{title}</header>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
