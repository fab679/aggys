import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  Errors: false,
  users: [],
};

const profilesSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    Loading: (state) => {
      state.loading = true;
      state.Error = false;
    },
    Error: (state) => {
      state.loading = false;
      state.Error = true;
    },
    Data: (state, { payload }) => {
      state.loading = false;
      state.Error = false;
      state.users = payload;
    },
  },
});

const { Loading, Error, Data } = profilesSlice.actions;

export function FetchUsers() {
  return async (dispatch) => {
    dispatch(Loading());
    try {
      const response = await axios.get(
        "https://ti-react-test.herokuapp.com/users"
      );
      const data = response.data;
      dispatch(Data(data));
    } catch (e) {
      dispatch(Error());
    }
  };
}

export default profilesSlice.reducer;
