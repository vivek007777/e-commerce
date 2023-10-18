import React, { useEffect, useState } from "react";
import "../css/Home.css"; 
import Card from "./Card";
import axios from 'axios'


  const Home = (props) => {
  const [products , setProducts] = useState([])
 
   useEffect(()=>{ 
    const fetchProducts = async()=>{
      const data = await axios.get('https://dummyjson.com/products')
      console.log(data)
      setProducts(data?.data?.products)
    }
    fetchProducts()
  },[])

  

  return (
        <div className="home-img" >
        {products?.map((product, index) => (
        <Card product={product} />
        ))}
        </div>                  
  );
};
export default Home;
