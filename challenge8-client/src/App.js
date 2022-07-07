import React, { Component } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserForm } from './components/UserForm';
import TableComponent from './components/TableComponent';
import FooterComponent from './components/FooterComponent';
import { InputComponent } from './components/InputComponent';

export default function App() {

  return (
    <div>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TableComponent />} />
        </Routes>
        <Routes>
          <Route path='/create' element={<UserForm />} />
        </Routes>
        <Routes>
          <Route path='/edit/:id' element={<UserForm />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
      {/* <InputComponent /> */}
    </div>
  )
}

