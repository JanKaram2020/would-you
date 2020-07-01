import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "authUser",
  initialState: "",
  reducers: {
    setAuthedUser: (authUser, action) => {
      authUser = action.payload;
      return authUser;
    },
  },
});
export const { setAuthedUser } = slice.actions;
export default slice.reducer;