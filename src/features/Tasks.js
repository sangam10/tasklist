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
        },
        updateTask:(state,action)=>{
          state.value.map(element=>{
            if(element.id === action.payload.id){
                element.task = action.payload.task
                element.date = action.payload.date
            }
          })
          
        }
    }
})

export const { deleteTask, addTask,updateTask } = taskSlice.actions;
export default taskSlice.reducer;