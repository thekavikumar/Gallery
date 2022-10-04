import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * @param {number} maxWidth 
 * @returns {boolean}
 */
export const useMediaQueryMatch = (maxWidth) => {
  const mediaQueryList = useMemo(() => window.matchMedia(`(max-width: ${maxWidth}px)`), [maxWidth]);
  const [matches, setMatches] = useState(mediaQueryList.matches);

  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches);
    };
    mediaQueryList.addEventListener("change", handler);
    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [maxWidth, mediaQueryList]);

  return matches;
};
