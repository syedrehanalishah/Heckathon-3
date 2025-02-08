import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { Cart } from '@/app/Units/Types'

// Define the initial state using that type
const initialState: Cart [] = [];
export const CartSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addtocart(state,action){
      let vvid = Math.floor(1000+Math.random()*9000)
      let newobj = {...action.payload,vvid}
      state.push(newobj)
    },
  },
})

export const {addtocart} = CartSlice .actions

export default CartSlice.reducer