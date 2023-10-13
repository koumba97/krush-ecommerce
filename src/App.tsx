import Home from './components/Home/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import AppTemplate from './templates/AppTemplate/AppTemplate.tsx';
import AuthTemplate from './templates/AuthTemplate/AuthTemplate.tsx';
import SignInForm from './components/Auth/SignInForm/SignInForm.tsx';
import SignUpForm from './components/Auth/SignUpForm/SignUpForm.tsx';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext.tsx';

const App = () => {
    const { currentUser } = useContext(UserContext);
    return (
        <Routes>
            <Route path="/" element={<AppTemplate />}>
                <Route index element={<Home />} />
                <Route path="/category/:categoryName" element={<Home />} />
            </Route>

            {currentUser ? null : (
                <Route path="/auth" element={<AuthTemplate />}>
                    <Route path="/auth/login" element={<SignInForm />} />
                    <Route path="/auth/register" element={<SignUpForm />} />
                </Route>
            )}
        </Routes>
    );
};

export default App;
