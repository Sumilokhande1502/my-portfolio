import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { toggleMobileMenu, closeMobileMenu } from '@/store/slices/uiSlice';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '@shared/constants';
import { Icon } from '@/components/ui/icon';

export function Navbar() {
  const dispatch = useDispatch();
  const { isMobileMenuOpen } = useSelector((state: RootState) => state.ui);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      if (window.scrollY === 0) {
        setActiveIndex(0);
        return;
      }
      const navHeight = 80;
      const offsets = NAVIGATION_ITEMS.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return Infinity;
        const rect = el.getBoundingClientRect();
        return Math.abs(rect.top - navHeight);
      });

      const current = offsets.indexOf(Math.min(...offsets));
      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (index: number, sectionId: string) => {
    setActiveIndex(index);
    setIsScrolling(true);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => setIsScrolling(false), 700);

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    dispatch(closeMobileMenu());
  };

  return (
    <nav className="fixed top-4 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/70 shadow-[0_20px_50px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection(0, 'home')}
              className="group flex cursor-pointer items-center space-x-3"
            >
              <img
                src={PERSONAL_INFO.profileImage}
                alt={`${PERSONAL_INFO.name} Logo`}
                className="h-10 w-10 rounded-full border border-white/10 object-cover shadow-lg shadow-cyan-500/10 transition-all duration-200 group-hover:border-cyan-400"
              />
              <span className="text-lg font-semibold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
            </button>
          </div>

          {}
          <div className="hidden md:block">
            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 p-1.5">
              {NAVIGATION_ITEMS.slice(0, 6).map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(index, item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-violet-500/20 text-white shadow-[0_0_20px_rgba(56,189,248,0.2)]'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {}
            <button
              onClick={handleMobileMenuToggle}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
            >
              {isMobileMenuOpen ? (
                <Icon name="xmark" className="h-4 w-4" />
              ) : (
                <Icon name="bars" className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-slate-900/90 md:hidden">
          <div className="space-y-1 px-3 py-3">
            {NAVIGATION_ITEMS.slice(0, 6).map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(index, item.id)}
                className={`block w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-all ${
                  activeIndex === index
                    ? 'bg-cyan-500/15 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
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
