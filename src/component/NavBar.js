import React from 'react';
import "../css/NavBar.css";
import { BsSearch } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import imageNav from '../image/logo.png'
import NavbarBurger from './NavBurger'
const NavBar=(()=>{
  return(
  <div>
  
  <nav class="navbar">
  <div class="container-fluid">
  
    <div class="navbar-header">
  
      <h4 style={{color: '#5b5b47', fontSize:'30px'}}> <NavbarBurger/></h4>
    </div>
    <ul class="nav navbar-nav">
   
      <li class="active"><a href="/Home">Home</a></li>
      <li><a href="Element">Element</a></li>
      <li><a href="Blog">Blog</a></li>
      <div className='icon'>
      <li>  <BsSearch/></li>
      <li>  <FaHeart/></li>
      <li><FaShoppingCart /></li>
      </div>
    </ul>
  </div>
 
</nav> 
    </div>
  )
})
export default NavBar
