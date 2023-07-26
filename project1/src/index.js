import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './hompage';
import AboutUs from './aboutus';
import Team from './team';
import Services from './services';
import DataFromWeb from './dataFromWeb';
import DataFromWeb2 from './dataFromWeb2';
import DataFromWeb3 from './dataFromWeb3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <h1><center>Welcome to Nationwide</center></h1>

    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/aboutus"> About </Link></li>
          <li><Link to="/services"> Services </Link></li>
          <li><Link to="/myteam"> Team </Link></li>
          <li><Link to="/allcomments"> Comments </Link></li>
          <li><Link to="/commentsbypost"> Comments </Link></li>
          <li><Link to="/posts"> Posts </Link></li>

        </ul>
      </nav>
    

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/myteam" element={<Team/>} />
        <Route path="/allcomments" element={<DataFromWeb/>} />
        <Route path="/commentsbypost" element={<DataFromWeb2/>} />
        <Route path="/posts" element={<DataFromWeb3/>} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
