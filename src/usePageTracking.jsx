import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-P8FJY60942', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
