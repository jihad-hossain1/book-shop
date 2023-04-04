import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
  return (
    <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <Header></Header>
      <Outlet></Outlet>
      {/* footer component */}
    </div>
  );
};

export default App;
