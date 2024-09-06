import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { columns } from "../../enums";

interface SortState {
  direction: "a-z" | "z-a";
  sortBy: columns;
}

const initialState: SortState = {
  direction: "a-z",
  sortBy: columns.name,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<SortState["sortBy"]>) => {
      if (state.sortBy === action.payload) {
        state.direction = state.direction === "a-z" ? "z-a" : "a-z";
      } else {
        state.sortBy = action.payload;
        state.direction = "a-z";
      }
    },
  },
});

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
