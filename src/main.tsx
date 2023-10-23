import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';
import { UserProvider } from './contexts/UserContext.tsx';
import { CategoriesProvider } from './contexts/CategoriesContext.tsx';
import { CartProvider } from './contexts/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <CategoriesProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </CategoriesProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
