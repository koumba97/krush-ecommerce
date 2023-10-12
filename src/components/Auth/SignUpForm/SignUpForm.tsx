import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase';
import Form from '../../ui/Form/Form';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import SocialMediaButton from '../../ui/SocialMediaButton/SocialMediaButton';

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, email, password, confirmPassword } = formFields;

    const handleInputChange = (newValue: { name: string; value: string | number | undefined }) => {
        setFormFields({ ...formFields, [newValue.name]: newValue.value });
        console.log(formFields);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        if (password === confirmPassword) {
            try {
                const resp = await createAuthUserWithEmailAndPassword(email, password);
                if (resp) {
                    await createUserDocumentFromAuth(resp.user, { username });
                    resetFormField();
                }
            } catch (error: any) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('This email is already in use');
                } else if (error.code === 'auth/weak-password') {
                    alert('Password should be at least 6 characters');
                }
                console.log(error.code);
            }
        } else {
            alert("Passwords don't match");
        }
    };

    const resetFormField = () => {
        setFormFields(defaultFormFields);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div className="social-buttons-container border-bottom">
                <h3>Sign up with...</h3>
                <div className="buttons">
                    <SocialMediaButton socialMedia="google"></SocialMediaButton>
                    <SocialMediaButton socialMedia="facebook"></SocialMediaButton>
                </div>
            </div>
            <h3>Or sign up with email</h3>
            <Input
                value={username}
                onChange={handleInputChange}
                type="text"
                name="username"
                placeholder="Username"
                required={true}
                icon="las la-at"
            ></Input>

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

            <Input
                value={confirmPassword}
                onChange={handleInputChange}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required={true}
                icon="las la-key"
            ></Input>

            <Button type="submit">Sign Up</Button>
        </Form>
    );
};

export default SignUpForm;
