import { createContext, useContext } from 'react';

export const UserContext = createContext(null);

export function UserProvider({children}) {
	const user = {
    name: 'ivan',
    email: 'ivan@gmail.com'
  }



	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
