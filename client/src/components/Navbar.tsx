import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { toggleTheme } from '@/store/slices/themeSlice';
import { toggleMobileMenu, closeMobileMenu } from '@/store/slices/uiSlice';
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
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-primary cursor-pointer"
            >
              SSL
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 dark:text-slate-300 hover:text-primary transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              )}
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={handleMobileMenuToggle}
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-primary font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
