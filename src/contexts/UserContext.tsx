import { createContext, useState } from 'react';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (user: Object) => null,
});

interface IProp {
    children: any;
}
export const UserProvider = ({ children }: IProp) => {
    const [currentUser, setCurrentUser] = useState<Object | null>(null);
    const value = { currentUser, setCurrentUser };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
