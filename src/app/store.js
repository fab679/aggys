import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/profiles/user";
import profileReducer from "../features/profiles/ProfileSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    profile: profileReducer,
  },
});
