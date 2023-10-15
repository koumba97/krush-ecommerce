import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener } from '../utils/firebase/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (_user: Object | null) => null,
});

interface IProp {
    children: any;
}
export const UserProvider = ({ children }: IProp) => {
    const [currentUser, setCurrentUser] = useState<Object | null>(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user: any) => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    //@ts-ignore
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
