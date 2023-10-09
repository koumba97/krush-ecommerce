import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase';

const defaultFormFields = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { username, email, password, confirmPassword } = formFields;

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: Event) => {
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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={() => {}}>
                <div>
                    <label>Username</label>
                    <input type="text" required onChange={handleChange} value={username} name="username" />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required onChange={handleChange} value={email} name="email" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" required onChange={handleChange} value={password} name="password" />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        required
                        onChange={handleChange}
                        value={confirmPassword}
                        name="confirmPassword"
                    />
                </div>

                <button type="submit" onClick={handleSubmit}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUpForm;
