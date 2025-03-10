import { SortingOptions } from "@/utils/types/SortingOptions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OptionsState {
  sortOption: SortingOptions;
  selectedCategories: string[];
}

const initialState = {
  sortOption: "Default",
  selectedCategories: [],
} satisfies OptionsState as OptionsState;

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeSortingOption: (state, action) => {
      state.sortOption = action.payload;
    },
    changeCategories: (state, action: PayloadAction<string>) => {
      if (state.selectedCategories.includes(action.payload))
        state.selectedCategories = state.selectedCategories.filter(
          (category) => category !== action.payload,
        );
      else state.selectedCategories.push(action.payload);
    },
  },
});

export const { changeSortingOption, changeCategories } = optionsSlice.actions;
export default optionsSlice.reducer;
