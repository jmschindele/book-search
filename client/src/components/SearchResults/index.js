import React from 'react';
import BookCard from '../BookCard'

const SearchResults = props => {
    return(
        <div className='container search-results'>
            {props.books.map((book, i) => (
                <BookCard {...props}
                id={book._id}
                key={i}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
                link={book.infoLink}
                >
                    <button {...props} name='save-btn' onClick={props.handleAddClick}>Add</button>
                    <button name='view-btn'><span href={props.link}>View</span></button>
                </BookCard>
            ))}
        </div>

    );
};
export default SearchResults;