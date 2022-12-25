import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Currentuser:  null,
  loading: false,
  error: false
}

export const userSlice = createSlice({
  name: 'user',
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
    },
    subscription: (state, action) => {
      if (state.Currentuser.subscribedUsers.includes(action.payload)) {
        state.Currentuser.subscribedUsers.splice(
          state.Currentuser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.Currentuser.subscribedUsers.push(action.payload);
      }
    },
  },
})  

export const {loginStart , loginSuccess , loginFailure , logout,subscription} = userSlice.actions

export default userSlice.reducer;