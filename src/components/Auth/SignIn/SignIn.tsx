import { signInWithGooglePopup } from '../../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in With Google</button>
        </div>
    );
};

export default SignIn;
