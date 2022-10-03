import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';

/**
 * @returns {{
 *   user: import('firebase/auth').User,
 *   signedIn: boolean,
 *   setUser: (user: import('firebase/auth').User) => void
 * }}
 */
export const useUser = () => {
  return useContext(UserContext);
};
