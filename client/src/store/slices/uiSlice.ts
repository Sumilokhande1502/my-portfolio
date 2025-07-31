import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isMobileMenuOpen: boolean;
  activeProjectFilter: string;
}

const initialState: UiState = {
  isMobileMenuOpen: false,
  activeProjectFilter: 'all',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setProjectFilter: (state, action) => {
      state.activeProjectFilter = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setProjectFilter } = uiSlice.actions;
export default uiSlice.reducer;