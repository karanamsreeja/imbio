import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Company from "./components/company";
import Team from "./components/team";
import Topbar from "./components/topbar";
import Footer from "./components/footer";
import Experts from "./components/experts";
import Learn from "./components/learn";
import Services from "./components/services";
import Stories from "./components/success-stories";
import GetStarted from "./components/get-started";

function MyRouter   ()  {   
    return (<>
    <div>
      <BrowserRouter >
        <Topbar/>
          <Routes  >           
            <Route path='/' exact element={<Home/>} />
            <Route path='/company' exact element={<Company/>} />
            <Route path='/team' exact element={<Team/>} />
            <Route path='/experts' exact element={<Experts/>} />
            <Route path='/learn' exact element={<Learn/>} />
            <Route path='/services' exact element={<Services/>} />
            <Route path='/stories' exact element={<Stories/>} />
            <Route path='/get-started' exact element={<GetStarted/>} />
          </Routes> 
        <Footer/>
    </BrowserRouter>
    </div>
</>)  
}

export default MyRouter;