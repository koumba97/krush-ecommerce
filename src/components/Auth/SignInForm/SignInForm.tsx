import './SignInForm.scss';
import { useState } from 'react';
import {
    signInAuthUserWithEmailAndPassword,
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase';
import Input from '../../ui/Input/Input';
import Form from '../../ui/Form/Form';
import Button from '../../ui/Button/Button';
import { Link } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleInputChange = (newValue: { name: string; value: string | number | undefined }) => {
        // const { name, value } = event.target;
        setFormFields({ ...formFields, [newValue.name]: newValue.value });
        console.log(formFields);
    };

    const handleSubmit = async (event: any) => {
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
        <Form onSubmit={handleSubmit}>
            <Input
                value={email}
                onChange={handleInputChange}
                type="email"
                name="email"
                placeholder="Email"
                required={true}
                icon="las la-envelope"
            ></Input>

            <Input
                value={password}
                onChange={handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
                required={true}
                icon="las la-key"
            ></Input>

            <Button type="submit">Sign In</Button>

            <Link to="" className="link-forgot-password">
                Forgot password ?
            </Link>
            <div className="social-buttons-container">
                <h3>Or sign in with...</h3>
                <button onClick={logGoogleUser}>Sign in With Google</button>
                <button onClick={logFacebookUser}>Sign in With Facebook</button>
            </div>
        </Form>
    );
};

export default SignInForm;
