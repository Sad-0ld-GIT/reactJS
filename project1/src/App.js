// import logo from './logo.svg';
import './App.css';
// import Info from './info';
// import Addition from './addition';
// import Information from './Information';
// import SalarySlip from './salarySlip';
// import Results from './results';
// import Children from './children';
// import Numbers from './numbers';
// import Records from './records';
// import Events from './events';
// import EmployeesData from './employees';
// import DataFromWeb from './dataFromWeb';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import HomePage from './hompage';
import AboutUs from './aboutus';
import Team from './team';
import Services from './services';
import DataFromWeb from './dataFromWeb';
import DataFromWeb2 from './dataFromWeb2';
import DataFromWeb3 from './dataFromWeb3';

function App() {
  return (
    <>
      {/* <h1><center>Welcome to ReactJS training</center></h1>
      <Info/>
      <br/>
      <Addition/>
      <Information name="Shafeeq" address="Manchester"/>
      <Information name="James Bond" address="MI6"/> */}
      {/* <SalarySlip name="Shafeeq" salary="1500"/>
      <SalarySlip name="James Bond" salary="10000"/> */}
      {/* <Results name="James Bond" phy="75" chem="80" math="84"/>
      <Results name="Matt" phy="65" chem="69" math="54"/>
      <Results name="Phil" phy="55" chem="45" math="60"/> */}
      {/* <Children>
        Exam Results
        </Children> */}
        {/* <Numbers/> */}
        <br/>
        {/* <Records/> */}
        {/* <Events/> */}
        {/* <EmployeesData/> */}
        {/* <DataFromWeb/> */}
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
    </>
  );
}

export default App;
