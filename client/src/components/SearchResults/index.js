import React from 'react';
import BookItem from '../BookItem'


const SearchResults = props => {
    return(
        <div className='container search-results'>
            {props.books.map((book, i) => (
                <BookItem {...props}
                id={book._id}
                key={i}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                link={book.infoLink}
                >
                    <button {...props} name='save-btn' className='btn-delete' onClick={props.handleAddClick}>Add</button>
                </BookItem>
            ))}
        </div>

    );
};
export default SearchResults;