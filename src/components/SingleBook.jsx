import React from 'react';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
    const { image, title, isbn13 } = book;
    const id = book.isbn13
    // console.log(book.isbn13);
    return (
        <div className='p-2 bg-gray-300 m-3 shadow rounded-md flex flex-col '>
            <img className='rounded object-cover' src={image} alt="" />
            <h2 className='text-center '>{title}</h2>
            <div className='flex justify-between items-center mt-auto'>
                <div>
                    <button><small className='btn w-full btn-xs btn-error btn-outline lowercase'>AddCart</small></button>
                </div>
                <div>
                    <Link to={`/book/${id}`}><small className='text-blue-600 hover:underline'>See More</small></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;