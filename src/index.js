import React from "react";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import './index.css';
import Homepage from './pages/Homepage';
import Welcome from './pages/Welcome';
import Catalog from './pages/Catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* <React.StrictMode> */}
      <Header/>
      <Menu/>
      <Routes>
        <Route exact path="/welcome" element={<Welcome/>}/>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/catalog" element={<Catalog/>}/>
      </Routes>
      {/* <Footer/> */}
    {/* </React.StrictMode> */}
  </Router>
);
reportWebVitals();