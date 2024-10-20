import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';  
import Home from './Pages/Home';  
import NotFound from './Pages/NotFound';  
import Success from './Pages/Success';  
 
import Footer from './components/Footer'; 

import "./App.css"
const App = () => {
  return (
    <Router>

 


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />


      <Toaster />
    </Router>
  );
}

export default App;
