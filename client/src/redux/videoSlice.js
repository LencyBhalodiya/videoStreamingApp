import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Currentuser:  null,
  loading: false,
  error: false
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    loginStart: (state) =>{
        state.loading = true;
    },
    loginSuccess: (state,action) => {
        state.loading = false;
        state.Currentuser = action.payload;
    },
    loginFailure: (state) => {
        state.loading = false;
        state.error = true;
    },
    logout: (state) =>{
        state.Currentuser  = null;
        state.loading = false;
        state.error = false;
    }
  },
})  

export const {loginStart , loginSuccess , loginFailure , logout} = videoSlice.actions

export default videoSlice.reducer;