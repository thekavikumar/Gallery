import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

/**
 * @returns {{
 *   user: object,
 *   signedIn: boolean,
 *   setUser: (user: object) => void
 * }}
 */
export const useUser = () => {
  return useContext(UserContext);
};
