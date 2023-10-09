import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
    auth,
    signInWithFacebookPopup,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from '../../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase';
import SignUpForm from '../SignUp/SignUp';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user, {});
    };

    const logFacebookUser = async () => {
        const { user } = await signInWithFacebookPopup();
        await createUserDocumentFromAuth(user, {});
    };
    return (
        <>
            <div>
                <h1>Sign In</h1>
                <button onClick={logGoogleUser}>Sign in With Google</button>
                <button onClick={logFacebookUser}>Sign in With Facebook</button>
            </div>

            <SignUpForm />
        </>
    );
};

export default SignIn;
