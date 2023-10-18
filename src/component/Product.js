import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardList from "./CardList";

const Product=()=>{
  // const [product,setProduct] = useState({})
    const params= useParams();
    const {ProductId }= params
    useEffect(()=>{ 
        const fetchProducts = async()=>{
          const product = await axios.get(`https://dummyjson.com/products/${ProductId}`)
          console.log(product)
        }
        fetchProducts()
      },[ProductId])
  
     
   return (
   <div>
         {/* <h1 > UserId:{ProductId}</h1> */}
         <CardList/>
   </div>
   )    
}
export default Product;
