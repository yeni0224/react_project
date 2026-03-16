import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';//counterSlice를 default로 되어있는 이름으로 가져다 쓰겠다
import sizeReducer from './sizeSlice';

//store에 등록
//slice 별로 state 분리가 되어있지만 하나의 store에서 관리
const store = configureStore({reducer:{
    counter:counterReducer, //state.counter
    sizer:sizeReducer //state.sizer
}})
export default store;