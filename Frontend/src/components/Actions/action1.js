  export const ADD = (items)=>{
     console.log("Z",items)
    return{
    type: "ADD_ITEM",
    payload:items
   }
}

export const DEL = (id)=>{
  return{
  type: "DEL_ITEM",
  payload:id
 }
}
 export const total = (id)=>{
  return{
  type: "total",
  payload:id
 }
}
