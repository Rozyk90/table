import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

const initialState: FiltersState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filtersClear: (state) => {
      Object.assign(state, initialState);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { filtersClear, setName, setUsername, setEmail, setPhone } =
  filtersSlice.actions;

export default filtersSlice.reducer;
