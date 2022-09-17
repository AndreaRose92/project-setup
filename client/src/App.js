import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Root } from './components/Root';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Signup } from './components/Signup';

function App() {
  return (
    
    <>
      <Routes>
        <Route index element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>


  );
}

export default App;
