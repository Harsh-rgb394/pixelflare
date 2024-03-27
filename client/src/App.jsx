import React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { logo } from './assets';
import { Home, CreatePost, Login, SignUp } from './pages';


const App = () => (


  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-40 object-contain rounded-lg" />
      </Link>
      <div className=" justify-between items-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]">
        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
        &nbsp; &nbsp;
        <Link to="/login" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Login</Link>

      </div>
    </header>

    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] bg-sky-200 min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
