import { createSlice } from "@reduxjs/toolkit";

import { data } from '../Data';

export const taskSlice = createSlice({
    name: "tasks",
    initialState: { value: data },
    reducers: {
        deleteTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload.id)
        },
        addTask: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { deleteTask, addTask } = taskSlice.actions;
export default taskSlice.reducer;