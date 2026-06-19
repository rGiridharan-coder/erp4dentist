// ScrollToHash.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;

    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });

          // Clean up state to avoid scrolling again on re-entry
          window.history.replaceState({}, '', location.pathname);
        }, 200); // Delay to ensure DOM is fully rendered
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHash;
