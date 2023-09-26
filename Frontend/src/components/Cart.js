import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ADD } from './Actions/action1'
import { useState } from "react";
import { productData} from "./data";


// import Cartreducer from './Reducer/Reducer1'

function Cart (){
  const[ subdata,sets1]=useState(productData)
  console.log(subdata)
  const subb= useSelector((state)=>state.Cartreducer.carts)
  // sets1(s)
  console.log(subb)
  localStorage.setItem('data',subb)
  const dispatch = useDispatch();
  const s1=(u)=>{
    
      dispatch(ADD(u))
      localStorage.
      
    removeItem(u)
    console.log(u)
  
  }

 

   
    
    return(
      subdata.map((element)=>{
        return(
<div className="d-flex">
        <div class="card bg-white" style={{width: "18rem"}}>
  <div class="card-body bg-white text-primary">
    <h5 class="card-title">{element.name}</h5>
    <p class="card-text">{element.price}</p>
    <button className="btn btn-primary" onClick={()=>s1(element)}>clickkkk</button>
  </div>
  </div>
</div>)}
  ))
    
    
}
export default Cart ;