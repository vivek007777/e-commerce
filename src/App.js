import React from 'react';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Product from './component/Product';
// import Register from './component/Register';
import Footer from './component/Footer';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import Card from './component/Card';
import Login from './component/Login';
import './App.css';

const App=(props)=>{
  return(
    <div style={{backgroundColor:'rgb(240, 240, 240)', padding: '0rem'}}>
          <BrowserRouter>
           <NavBar/>
            {/* <div className='backimg' >
            <div style={{paddingInline: '9rem'}}> 
            <h1> Customer Login</h1> 
            <div className='col1'>
             <ul>
              <li><a href="/Home" style={{ textDecoration: 'none', color:'black'}}>Home</a></li>
              <li>  / Customer Login</li>
             </ul>
            </div>
           </div>
           </div> */}
           <Login/>
           {/* <Register/> */}
           <Routes>
            <Route path="/" element ={<Home/>} exact={true}/>
            <Route path="/Home" element ={<Home/>} exact={true}/>
            <Route path="/Product/:ProductId" element ={<Product/>} exact={true}/>
            {/* <Route path="/Register" element ={<Register/>} exact={true}/> */}
            <Route path-="/Card" element={<Card/>} exact={true}/>
            <Route path="/Login" element={<Login/>} exact={true}/>
            </Routes>
          
          <Footer/>
          
          </BrowserRouter>
          </div>
  )
}
export default App