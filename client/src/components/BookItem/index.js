import React from 'react';

  const BookItem = props => {
      
      return(
        <div className="card">
            <ul>
                <li>Title: {props.title}</li>
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