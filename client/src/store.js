import { configureStore } from '@reduxjs/toolkit'
import physiciansReducer from './slices/physicians';

const reducer = {
  physicians: physiciansReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
