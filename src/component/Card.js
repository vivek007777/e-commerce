import React from "react";
import { useNavigate } from 'react-router-dom';



const Card=(({product})=>{
    const navigate = useNavigate();
    const handleClick=((product)=>{
        navigate(`/Product/${product.id}`);
        console.log(product)
    })
    return(
           <div style={{backgroundColor: 'white'}} onClick={()=>handleClick(product)}>
            <div>
               <img src={product?.thumbnail}/>
            </div>
                <div style={{paddingTop:'1rem',textAlign: 'center'}}>
                <h2 style={{color: 'black', fontSize: '18px'}}> Title-{product?.title}</h2>
                <h1 style={{color: 'black', fontSize: '20px' }}> Rating- {product?.rating}</h1>
                <h3 style={{color:'black', fontSize: '17px'}}> Price-${product?.price}</h3>
                </div>
            </div>
    )
})
export default Card
// import React from 'react';
// import Star from './Star'

// const Card = ({ product }) => {
//   return (
//     <div style={{ backgroundColor: 'red', padding: '1rem' }}>
//       <div style={{ backgroundColor: 'white' }}>
//         <div>
//           <img src={product?.thumbnail} alt={product?.title} />
//         </div>
//       </div>
//       <div style={{ backgroundColor: 'white' }}>
//         <div className="rating md-2 grid">
//           {/* Use the StarRating component and pass the product's rating */}
//           <Star rating={product?.rating} />
//         </div>
//         <h1 style={{ color: 'black' }}>{product?.rating}</h1>
//         <h2 style={{ color: 'black' }}>{product?.title}</h2>
//         <h3> price-${product?.price}</h3>
//       </div>
//     </div>
//   );
// };

// export default Card;
