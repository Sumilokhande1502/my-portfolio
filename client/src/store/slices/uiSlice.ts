import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isMobileMenuOpen: boolean;
}

const initialState: UiState = {
  isMobileMenuOpen: false,
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
  },
});

export const { toggleMobileMenu, closeMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;
