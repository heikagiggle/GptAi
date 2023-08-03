/* eslint-disable no-unused-vars */
import React from 'react';
import { Brand, Cta, Navbar} from './components';
import {Blog, Footer, Features, Header, Possibility, Whatgpt3} from './containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <Whatgpt3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App

