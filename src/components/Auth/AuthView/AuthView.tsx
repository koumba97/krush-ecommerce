import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

const AuthView = () => {
    return (
        <div className="auth-view">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default AuthView;
