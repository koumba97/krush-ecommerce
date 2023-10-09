import { useState } from 'react';
import {
    signInAuthUserWithEmailAndPassword,
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        try {
            const resp = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(resp);
        } catch (error: any) {
            if (error.code === 'auth/invalid-login-credentials') {
                alert('Invalid login credentials');
            }
            console.log(error);
        }
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user, {});
    };

    const logFacebookUser = async () => {
        const { user } = await signInWithFacebookPopup();
        await createUserDocumentFromAuth(user, {});
    };
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" required onChange={handleChange} value={email} name="email" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" required onChange={handleChange} value={password} name="password" />
                </div>

                <button type="submit">Sign In</button>
            </form>
            <button onClick={logGoogleUser}>Sign in With Google</button>
            <button onClick={logFacebookUser}>Sign in With Facebook</button>
        </div>
    );
};

export default SignInForm;
