import { signInWithFacebookPopup, signInWithGooglePopup } from '../../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        await createUserDocumentFromAuth(user);
    };

    const logFacebookUser = async () => {
        const { user } = await signInWithFacebookPopup();
        console.log(user);
        await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in With Google</button>
            <button onClick={logFacebookUser}>Sign in With Facebook</button>
        </div>
    );
};

export default SignIn;
