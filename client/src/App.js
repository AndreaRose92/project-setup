import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Root } from './components/Root';
import { NotFound } from './components/NotFound';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { User } from './components/User';
import { UserProvider } from "./context/user" 


export const App = () => {
  
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route index element={<Root />} />
          <Route path='/user/:id' element={<User />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </UserProvider>
    </>


  );
}
