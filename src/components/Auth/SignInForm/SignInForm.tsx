import './SignInForm.scss';
import { useState } from 'react';
import { signInAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase';
import Input from '../../ui/Input/Input';
import Form from '../../ui/Form/Form';
import Button from '../../ui/Button/Button';
import { Link } from 'react-router-dom';
import SocialMediaButton from '../../ui/SocialMediaButton/SocialMediaButton';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleInputChange = (newValue: { name: string; value: string | number | undefined }) => {
        setFormFields({ ...formFields, [newValue.name]: newValue.value });
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

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Welcome back! 👋</h2>
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
            <div className="social-buttons-container border-top">
                <h3>Or sign in with...</h3>
                <div className="buttons">
                    <SocialMediaButton socialMedia="google"></SocialMediaButton>
                    <SocialMediaButton socialMedia="facebook"></SocialMediaButton>
                </div>
            </div>
        </Form>
    );
};

export default SignInForm;
