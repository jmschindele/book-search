import React from 'react';
import './style.css';

  const BookItem = props => {
      
      return(
        <div className="bookItem">
            <ul>
                <li><h2>{props.title}</h2></li>
                <li>{props.authors}</li>
                <li>{props.description}</li>
            </ul>
            <div actionbtns="action-buttons" {...props} >
            {props.children}
            </div>
        </div>

      )
  }

  export default BookItem