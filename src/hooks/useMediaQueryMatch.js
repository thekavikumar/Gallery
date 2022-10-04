import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * @param {{ maxWidth?: number, minWidth?: number }} opts 
 * @returns {boolean}
 */
export const useMediaQueryMatch = (opts) => {
  if (!opts || (opts.maxWidth === undefined && opts.minWidth === undefined)) {
    throw new Error(`useMediaQueryMatch requires at least one of maxWidth or minWidth`);
  }
  const mediaQueryList = useMemo(() => {
    let query = '';
    if (opts.maxWidth !== undefined) {
      query += `(max-width: ${opts.maxWidth}px)`;
    }
    if (opts.minWidth !== undefined) {
      if (opts.maxWidth !== undefined) query += ' and ';
      query += `(min-width: ${opts.minWidth}px)`;
    }
    return window.matchMedia(query);
  }, [opts]);
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
