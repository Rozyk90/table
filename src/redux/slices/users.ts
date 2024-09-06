import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { status } from "../../enums";

interface User {
  name: string;
  username: string;
  phone: number;
  email: string;
}

interface UsersState {
  users: User[];
  status: status;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: status.idle,
  error: null,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map((user: any) => ({
    name: user.name,
    username: user.username,
    phone: user.phone,
    email: user.email,
  }));
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = status.loading;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = status.succeeded;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = status.failed;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default usersSlice.reducer;
