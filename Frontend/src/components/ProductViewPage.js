import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ADD } from './Actions/action1'
import { useState } from "react";
import { productData} from "./data";

function ProductViewPage(){
    const[ subdata,sets1]=useState(productData)
          console.log(subdata)
          const subb= useSelector((state)=>state.Cartreducer.carts)
          // sets1(s)
          console.log(subb)
          localStorage.setItem('data',subb)
          const dispatch = useDispatch();
          const s1=(product)=>{
            // const addToCart = (product) => {
              // Check if the product is already in the cart
              const isProductInCart = subb.some(item => item.id === product.id);
            
              // If the product is not in the cart, add it
              if (!isProductInCart) {
                dispatch(ADD(product));
              } else {
                console.log('Product is already in the cart.');
              }
            };
            //   dispatch(ADD(u))
            //   localStorage.removeItem(u)
            // console.log(u) }
        
       
        
        
        // import Cartreducer from './Reducer/Reducer1'
        
         
         
        
           
            
            return(
        subdata.map((element)=>{
                    return(
        <div class="card" style={{width: "18rem;"}}>
  <img src={ element.imageurl}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{element.name}</h5>
    <p class="card-text">₹{element.price}</p>
    <button className="btn btn-primary" onClick={()=>s1(element)}>Add TO Cart </button>
  </div>
</div>)})

)
            
            
            

    
}
export default ProductViewPage;