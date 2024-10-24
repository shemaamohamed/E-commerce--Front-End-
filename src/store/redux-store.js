
import { configureStore } from '@reduxjs/toolkit';
import  productsReducer from './slices/productSlice'; 
<<<<<<< HEAD
import  itemsReducer from './slices/itemSlice';// Correct import based on default export
=======
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff

const store = configureStore({
  reducer: {
    products: productsReducer, 
<<<<<<< HEAD
    items: itemsReducer,
=======
 
>>>>>>> 8f68d25c1f494791405fd49ba7a13bc8f03cd8ff
  },
});

export default store;