import Home from './components/Home/Home.tsx';
import { Routes, Route } from 'react-router-dom';
import AuthView from './components/Auth/AuthView/AuthView.tsx';
import AppTemplate from './templates/AppTemplate/AppTemplate.tsx';
import AuthTemplate from './templates/AuthTemplate/AuthTemplate.tsx';
import SignInForm from './components/Auth/SignInForm/SignInForm.tsx';
import SignUpForm from './components/Auth/SignUpForm/SignUpForm.tsx';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<AppTemplate />}>
                <Route index element={<Home />} />
                <Route path="/category/:categoryName" element={<Home />} />
            </Route>

            <Route path="/auth" element={<AuthTemplate />}>
                <Route path="/auth/login" element={<SignInForm />} />
                <Route path="/auth/register" element={<SignUpForm />} />
            </Route>
        </Routes>
    );
};

export default App;
