import React,{useState,useEffect} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/CardList.css";

function CardList() {

  const [data , setData] = useState([])
  const{id}= useParams()
  useEffect(()=>{ 

    
      // const data = await axios.get(`https://dummyjson.com/products/`+id)
    axios.get('https://dummyjson.com/products/'+ id)
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

// const location =useLocation()
// const getProductId=location.pathname.split("/"[])
// console.log(getProductId)
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className='row'>
        <div className='col'>
         <img src={data?.thumnails}/>
        </div>
        <div className='col'>
        <h1> {data?.title}</h1>

        </div>

      </div>
        
    </div>
  );
}


export default CardList;


// import { Button } from "bootstrap";
// // import {BiSolidHeartCircle } from 'react-icons/fa';

// const CardList=((product)=>{
//     return(
       
//         <div className="raw">
//         <div className="raw1">
//           main
//             <div className="imagelist" >
//             <img src={product.thumnails}/>
//             <button>AAD TO CART</button>
//             <button>BUY NOW</button>
//             </div>
//             <div>
//             content
//          </div> 
//          </div>
      
//         </div>
        
//      )
// })
// export default CardList


//         // <div className="CardListOuter">
//         //     <div className="inner1">
//         //         <div className="inner2" >
//         //             <img src={product?.thumbnail}/> <br/>
//         //             <button> Add to Cart</button><br/>
//         //             <button> Buy now</button>
//         //         </div>
//         //         {/* <div className="inner3">
//                      /* <h4> {product?.title}</h4>
//                      <h4> {product?.rating}</h4>
//                      <h4> {product?.price} </h4> */
//             /* <h2>Product Name: {product.title}</h2>
//             <p>Description: {product.description}</p>
//             <p> Rating{product.rating}</p>
//             <p>Price: ${product.price}</p>
//                 </div>
//                 <div className="innner4">
//                     <ul>
//                         <li> <h3>Available Offer</h3></li>

//                         <li><h5>Bank Offer10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above</h5><br/></li>

//                         <li> <h5>Bank Offer10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹5,000 and aboveT&C</h5><br/></li>

//                         <li> <h5> Bank Offer10% off on ICICI Bank Debit Card Txns, up to ₹1250, on orders of ₹5,000 and aboveT&C</h5><br/></li>

//                         <li><h5>Special PriceGet extra ₹7901 off (price inclusive of cashback/coupon)T&C</h5><br/></li>
//                         </ul> *}/
//         // </div>  
//              )
//  })
//  export default CardList


// {/* <div flex>
   
//         <div>
//   image list
//         </div>
//         <div>
//      main image
//         </div>
//         <div>
//          content
//         </div> 
// </div> */