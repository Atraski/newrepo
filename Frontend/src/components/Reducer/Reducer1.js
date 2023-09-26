import { useEffect } from "react";

const inits = {
    carts:[]
};

console.log("Z1",inits)
export const Cartreducer=(state=inits,action)=>{
  
   
    
    switch(action.type){
        case"ADD_ITEM":
            return{
            ...state,
            carts:[...state.carts,action.payload]
        

        }
        case "DEL_ITEM":
    return {
        ...state,
        carts:  state.carts.filter((el) => el.id !== action.payload)
    }
default:
    return state

};
// case:"total":
// let totalprice =state.cart.reduce((inv,aftr)=>{
//     let {price,quantity}=aftr;
//     inv=  inv+price*quantity
// },0)
// return ...state,
// totalprice,


}
  


