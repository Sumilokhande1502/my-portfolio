import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeTheme } from '@/store/slices/themeSlice';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);

  return <>{children}</>;
}
