import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating, totalPages } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6 border-gray-200 border">
                <figure className='bg-gray-200 py-8 rounded-2xl'>
                    <img
                        className='h-[233px]'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4 p-4'>
                        {
                            tags.map((tag, i) => <button key={i} className='btn btn-sm text-green-600 rounded-xl bg-green-100'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By : {author}</p>
                    <div className='border-t-2 border-dashed my-3'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div>{totalPages}</div>
                        <div>{rating}</div>
                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-200" />


                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;