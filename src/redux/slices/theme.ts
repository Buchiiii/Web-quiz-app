import { createSlice } from "@reduxjs/toolkit";


interface ITheme {
  isDark: boolean;
}

const initialState: ITheme = {
  isDark: false,
};

const Theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme } = Theme.actions;
export default Theme.reducer;
