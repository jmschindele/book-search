import React from 'react';

// const styles = {
//     cardContainer: {
//       display: "inline-grid",
//       margin: "10px"
//     },
//     card: {
//       maxWidth: "300px",
//       display: "inline-block"
//     },
//     media: {
//       objectFit: "cover"
//     }
//   };

  const BookCard = props => {
      

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

  export default BookCard