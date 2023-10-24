import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    counter : 10
}

export const counterSlice = createSlice ({
    name: 'counter',
    initialState,
    reducers: {
        increment : (state) => {
            console.log (state.counter)
            state.counter = state.counter +1
        },
        decrement : (state) => {
            console.log(state.counter)
            state.counter = state.counter -1
        }
    }
})

export const {increment} = counterSlice.actions;
export const {decrement} = counterSlice.actions;