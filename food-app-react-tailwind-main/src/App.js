import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeadlineCards from './components/HeadlineCards'
import Food from './components/Food'
import Category from './components/Category'
import { Route, Routes } from "react-router-dom";
import { RouteObject } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

const Home=()=>
{
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </>
  );
}

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path='/Login/Signup' element={<Signup />}/>
      </Routes>


  );
}

export default App;
