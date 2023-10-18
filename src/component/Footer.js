import React from 'react';
import "../css/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import the Bootstrap CSS

import {FaFacebookSquare } from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
// import {ImYoutube} from 'react-icons/fa';
function Footer() {
  return (
    <div className='outernn'>
       <div className='colll'>
          <div className='col2'>
            <h5>Contact Us</h5>
            <p>Email: EcomerceStore.99@gmail.com</p>
            <p>Phone:+91 9060347289</p>
          </div>  
          <div className='col2'>
            <h5>ABOUT</h5>
             <ul className="list-unstyled">
               <li><a href="/">About us</a></li>
               <li><a href="/Store location">Store location</a></li>
               <li><a href="/Contact">Contact</a></li>
               <li><a href="/Orders tracking">Orders tracking</a></li>
           </ul>
          </div>    
          <div className ='col2'>
          
            <h5>FOLLOW US ON</h5>
            <ul className="list-unstyled">
               <li><a href=""><i className="fab fa-facebook-f"></i> <FaFacebookSquare />Facebook</a></li>
               <li><a href="#"><i className="fab fa-twitter"></i> <FaTwitter/>Twitter</a></li>
               <li><a href="#"><i className="fab fa-instagram"></i><FaInstagram/> Instagram</a></li>
               {/* <li><a href="#"><i className="fab fa-youtube"></i><ImYoutube/> Youtube</a></li> */}
          </ul>
          </div>
          <div className='col2'>
          <h5>USEFUL LINKS</h5>
             <ul className="list-unstyled">
               <li><a href="Returns"><i className="fab fa-facebook-f"></i>Returns</a></li>
               <li><a href="Support Policy"><i className="fab fa-twitter"></i>Support Policy</a></li>
               <li><a href="Size guide"><i className="fab fa-instagram"></i> Size guide</a></li>
              {/* <li><a href="FAQs"><i className="fab fa-instagram"></i>AQs</a></li> */}
           </ul>
          </div>
       </div>
    </div>
    // <div style={{backgroundColor:'#f8f8f8', height:'300px', marginLeft:'-8rem', marginTop:'2rem'}}>
    // <footer className="bg-dark-text-light-py-4">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-4">
    //         <h5>Contact Us</h5>
    //         <p>Email: ecomerceStore.com</p>
    //         <p>Phone:+91 9060347289</p>
    //       </div>
    //       <div className="col-md-4">
    //        
    //       </div>
    //       <div className="col-md-4">
    //         <h5>FOLLOW US ON</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
    //           <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
    //           <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
    //         </ul>
    //       </div>

    //       <div className="col-md-4">
    //         <h5>USEFUL LINKS</h5>
    //         <ul className="list-unstyled">
    //           <li><a href="Returns"><i className="fab fa-facebook-f"></i>Returns</a></li>
    //           <li><a href="Support Policy"><i className="fab fa-twitter"></i>Support Policy</a></li>
    //           <li><a href="Size guide"><i className="fab fa-instagram"></i> Size guide</a></li>
    //           <li><a href="FAQs"><i className="fab fa-instagram"></i>AQs</a></li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
 
    // </footer>
    // </div>
  );
}

export default Footer;
