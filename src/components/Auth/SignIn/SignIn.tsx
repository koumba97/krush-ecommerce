import { signInWithGooglePopup } from '../../../utils/firebase/firebase';

const SignIn = () => {
    const logGoogleUser = async () => {
        const resp = await signInWithGooglePopup();
        console.log(resp);
    };
    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in With Google</button>
        </div>
    );
};

export default SignIn;
