import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { toggleTheme } from '@/store/slices/themeSlice';
import { toggleMobileMenu, closeMobileMenu } from '@/store/slices/uiSlice';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '@shared/constants';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export function Navbar() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.theme);
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.ui);
  const [location] = useLocation();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleNavClick = () => {
    dispatch(closeMobileMenu());
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    dispatch(closeMobileMenu());
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-white/90 via-blue-50/80 to-indigo-50/80 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-gray-900/80 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={`${PERSONAL_INFO.name} Logo`}
                className="w-10 h-10 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-all duration-200"
              />
              <span className="text-xl font-bold">
                <span className="sm:hidden text-heading-primary font-semibold tracking-tight">{PERSONAL_INFO.name}</span>
              </span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_ITEMS.slice(0, 6).map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-body-primary hover:text-accent-emphasis transition-colors duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-body-primary" />
              ) : (
                <Moon className="w-5 h-5 text-body-primary" />
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-body-primary" />
              ) : (
                <Menu className="w-5 h-5 text-body-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAVIGATION_ITEMS.slice(0, 6).map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-3 py-2 text-body-primary hover:text-primary-solid font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
