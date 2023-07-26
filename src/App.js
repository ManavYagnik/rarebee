
import './App.css';
import '../src/MobileApp.css'
import {Route, Routes} from "react-router-dom";
import Header from './components/Header';
import  Main  from './components/Main.js';
import Footer from './components/Footer';

import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
        <Route path='/' element={<Main />}/>
        

         
   
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
