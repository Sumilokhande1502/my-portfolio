import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}


const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme !== null ? savedTheme === "true" : true;
  }
  return true;
};

const initialState: ThemeState = {
  isDarkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("darkMode", state.isDarkMode.toString());

      if (state.isDarkMode) {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }
    },
    initializeTheme: (state) => {
      const savedTheme = localStorage.getItem("darkMode");
      
      state.isDarkMode = savedTheme !== null ? savedTheme === "true" : true;

      
      document.documentElement.classList.remove("light", "dark");
      if (state.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.add("light");
      }
    },
  },
});

export const { toggleTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
