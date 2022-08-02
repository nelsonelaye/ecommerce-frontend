import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas:[],
  cart:[]
}

const Globalstate = createSlice({
  name: "second",
  initialState,
  reducers: {
 getting: 
    (state, {payload})=>{
        state.datas=payload
    },
 
 addCart :(state, {payload})=>{
     const check = state.cart .findIndex((el)=>el._id === payload._id)

     if(check >=0){
        state.cart[check].QTY +=1
     }else{
        state.cart.push({...payload, QTY:1})
     }
 },
 remove:(state, {payload})=>{
   
    const check = state.cart.findIndex((el) => el._id === payload._id);
    const checkValue = state.cart[check].QTY;

    if (state.cart[check].QTY > 1) {
        state.cart[check].QTY -= 1;
    } else if (state.cart[check].QTY === 1) {
        // state.cart = state.cart.filter((el) => el._id !== payload._id);
        return;
    }
 }, canceled : (state, payload)=>{
    state.cart = state.cart.filter((el)=> el._id !== payload._id)
 }
//  getTotal :(state, {payload})=>{
//     const [{totalprice, totalQty}] = state.cart.reduce(
//         (cost, items)=>{
//             const {QTY, price }
//         }
//     )
//  }
  }
});

export const {getting, addCart, remove, canceled} = Globalstate.actions

export default Globalstate.reducer