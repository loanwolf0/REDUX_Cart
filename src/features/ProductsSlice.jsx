import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
    IDLE :'idle',
    ERROR:'error',
    LOADING:'loading'
});

const ProductsSlice  = createSlice({
    
    name:'cart ',
    initialState:{
        data: [],
        status:STATUSES.IDLE,
    },
    reducers:{
    //    setProducts(state,action){

    //     // do not call any asyn call inside the reducers , never do this.
    //     // const res = await fetch('https://fakestoreapi.com/products');

    //     state.data = action.payload;
    //    },
    
    //    setStatus(state,action){
    //     state.status = action.payload;
    //         },
       
        },

   

        extraReducers: (builder) => {
            builder
                .addCase(fetchProducts.pending, (state, action) => {
                    state.status = STATUSES.LOADING;
                })
                .addCase(fetchProducts.fulfilled, (state, action) => {
                    state.data = action.payload;
                    state.status = STATUSES.IDLE;
                })
                .addCase(fetchProducts.rejected, (state, action) => {
                    state.status = STATUSES.ERROR;
                });
        },
    }); 

export const { setProducts,setStatus } = ProductsSlice.actions;
export default ProductsSlice.reducer;


//  thunks for asyn call 
//  a funtion who return another funtion;

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
});
// export function fetchProducts() {
//         return async function fetchProductThunk(dispatch, getState) {
//             dispatch(setStatus(STATUSES.LOADING));
//             try {
//                 const res = await fetch('https://fakestoreapi.com/products');
//                 const data = await res.json();
//                 dispatch(setProducts(data));
//                 dispatch(setStatus(STATUSES.IDLE));
//             } catch (err) {
//                 console.log(err);
//                 dispatch(setStatus(STATUSES.ERROR));
//             }
//         };
//     }
