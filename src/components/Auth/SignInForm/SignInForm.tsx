import { useState } from 'react';
import {
    signInAuthUserWithEmailAndPassword,
    signInWithFacebookPopup,
    signInWithGooglePopup,
} from '../../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../../utils/firebase/firebase';
import Input from '../../ui/Input/Input';
import Form from '../../ui/Form/Form';

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

    const handleSubmit = async (event: Event) => {
        // event.preventDefault();
        // try {
        //     const resp = await signInAuthUserWithEmailAndPassword(email, password);
        //     console.log(resp);
        // } catch (error: any) {
        //     if (error.code === 'auth/invalid-login-credentials') {
        //         alert('Invalid login credentials');
        //     }
        //     console.log(error);
        // }
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

            <Form onSubmit={handleSubmit}>
                <Input
                    value={email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                ></Input>

                <Input
                    value={password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required={true}
                ></Input>

                <button type="submit">Sign In</button>
            </Form>

            <button onClick={logGoogleUser}>Sign in With Google</button>
            <button onClick={logFacebookUser}>Sign in With Facebook</button>
        </div>
    );
};

export default SignInForm;
