import { createSlice } from "@reduxjs/toolkit"

const user = createSlice({

    name: "user",
    initialState: [],

    reducers: {


        adduser(state, action) {

            return state

        }


    }


})

export const { adduser } = user.actions

export default user.reducer