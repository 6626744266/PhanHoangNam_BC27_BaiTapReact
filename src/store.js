import { configureStore } from "@reduxjs/toolkit";
import seatReducer from './reducers/seatReducer'


const store = configureStore({
    reducer: {
        seat: seatReducer
    }
})

console.log(store.getState())


export default store
