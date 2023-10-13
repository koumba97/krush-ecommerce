import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListner } from '../utils/firebase/firebase';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (user: Object | null) => null,
});

interface IProp {
    children: any;
}
export const UserProvider = ({ children }: IProp) => {
    const [currentUser, setCurrentUser] = useState<Object | null>(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user: any) => {
            setCurrentUser(user);
            console.log(user);
        });
        return unsubscribe;
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
