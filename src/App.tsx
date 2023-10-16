import Home from './components/Home/Home.tsx';
import Product from './components/Product/Product.tsx';
import { Routes, Route } from 'react-router-dom';
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
                <Route path="/product/:productId" element={<Product />} />
            </Route>

            <Route path="/" element={<AuthTemplate />}>
                <Route path="/login" element={<SignInForm />} />
                <Route path="/register" element={<SignUpForm />} />
            </Route>
        </Routes>
    );
};

export default App;
