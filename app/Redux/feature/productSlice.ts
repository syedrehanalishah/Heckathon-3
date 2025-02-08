import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import  {Iproduct}  from '@/app/Units/Types'
import Products from '@/app/Units/Mock'


// Define the initial state using that type
const initialState  = Products;

export const productSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
 
  },
})

export const {} = productSlice.actions

export default productSlice.reducer