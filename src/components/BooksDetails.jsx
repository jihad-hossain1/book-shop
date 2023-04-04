import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BooksDetails = () => {
    const handleDetail = useLoaderData();
    console.log(handleDetail);
    const {authors, desc, language, pages, price, title , year, image } = handleDetail;
    return (
        <div className='px-10 bg-gray-50 rounded '>
            <div className='md:flex justify-center items-center'>
                
                <div className='absulate text-center'>
                    <img className='sticky top-0' src={image} alt="" />
                    <button className='btn md:w-64 btn-xs btn-error text-white '>Buy Now</button>
                </div>
                <div className='md:w-52'>
                    <h3 className='text-xl font-bold'>{title}</h3>
                    <p className='text-xl font-semibold'>Price: {price}</p>
                    <p>Author: <span className='underline'>{authors}</span></p>
                    <p><span>Publish:{year}</span>,<span>Pages: {pages}, Language: {language}</span></p>
                    <p><small>{desc}</small></p>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;