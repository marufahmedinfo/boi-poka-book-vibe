import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AddToStoredRedList, AddToStoredWishList } from '../../utility/AddToDB';

const BookDetail = () => {
    const {bookId} = useParams()
    const data = useLoaderData()
    const id = parseInt(bookId)
    const book = data.find(book => book.bookId === id)
    console.log(book)
    const {bookId: currentBookId, image} = book;
    const handleMarkAsRead = (id) => {
        AddToStoredRedList(id)
    }
    const handleAddToWishList = (id) => {
        AddToStoredWishList(id)
    }
    return (
        <div className='my-12'>
            <h2>Book details: {bookId}</h2>
            <img className='w-36' src={image} alt="" />
            <br />
            <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent">Mark as Read</button>
            <button onClick={() => handleAddToWishList(bookId)} className="btn btn-accent">Add to Wish List</button>

        </div>
    );
};

export default BookDetail;