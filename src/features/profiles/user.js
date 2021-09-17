import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  hasErrors: false,
  user: {},
};

const UserSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    Loading: (state) => {
      state.loading = true;
      state.hasErrors = false;
    },
    Errors: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    Data: (state, { payload }) => {
      state.loading = false;
      state.hasErrors = false;
      state.user = { ...payload };
    },
  },
});

const { Loading, Errors, Data } = UserSlice.actions;

export function GetUserInfo(id) {
  return async (dispatch) => {
    dispatch(Loading());
    try {
      const response = await axios.get(
        `https://ti-react-test.herokuapp.com/users/${id}`
      );
      const data = response.data;
      dispatch(Data(data));
    } catch (e) {
      dispatch(Errors());
    }
  };
}

export default UserSlice.reducer;
