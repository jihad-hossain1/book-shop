import React from 'react';

const Home = () => {
    return (
        <div className='mx-2 lg:flex my-3'>
            <div>
                <p className="bg-yellow-400 inline-block rounded-lg px-2 my-3">ON SALE!</p>
                <h2 className="text-5xl font-semibold mb-4">A reader lives a <br /> thousand lives <span className='font-semibold text-blue-500 text-5xl'>before he dies</span></h2>
            <p>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.</p>
            </div>
            <div>
                <img className="rounded w-full " src="https://images.unsplash.com/photo-1569728723358-d1a317aa7fba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;