import { configureStore } from '@reduxjs/toolkit'
import productSlice from './feature/productSlice'
import CartSlice from './feature/cartSlice'
// ...

export const Store = configureStore({
  reducer: {
 product:productSlice,
 cart:CartSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof Store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof Store.dispatch