import { SortingOptions } from "@/utils/types/SortingOptions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OptionsState {
  sortOption: SortingOptions;
  selectedCategories: string[];
  filterValue: string;
  powerMode: boolean;
  isModalOpen: boolean;
}

const initialState = {
  sortOption: "Default",
  selectedCategories: [],
  filterValue: "",
  powerMode: false,
  isModalOpen: false,
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
    changeFilterValue: (state, action: PayloadAction<string>) => {
      state.filterValue = action.payload;
    },
    togglePowerMode: (state) => {
      state.powerMode = !state.powerMode;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const {
  changeSortingOption,
  changeCategories,
  changeFilterValue,
  togglePowerMode,
  toggleModal,
} = optionsSlice.actions;
export default optionsSlice.reducer;
