import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * @param {{ maxWidth: number } | { minWidth: number }} width 
 * @returns {boolean}
 */
export const useMediaQueryMatch = (width) => {
  const mediaQueryList = useMemo(() => {
    let query = '';
    if (width.maxWidth !== undefined) {
      query += `(max-width: ${width.maxWidth}px)`;
    }
    if (width.minWidth !== undefined) {
      if (width.maxWidth !== undefined) query += ' and ';
      query += `(min-width: ${width.minWidth}px)`;
    }
    return window.matchMedia(query);
  }, [width]);
  const [matches, setMatches] = useState(mediaQueryList.matches);

  useEffect(() => {
    const handler = (e) => {
      setMatches(e.matches);
    };
    mediaQueryList.addEventListener("change", handler);
    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [mediaQueryList]);

  return matches;
};
