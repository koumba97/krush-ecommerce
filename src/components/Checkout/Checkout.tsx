import { useContext } from 'react';
import './Checkout.scss';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';

const Checkout = () => {
    const { cartItems, subTotal } = useContext(CartContext);
    return (
        <div className="checkout">
            <div className="cart-content">
                {cartItems.length > 0 ? (
                    <div className="list">
                        {cartItems.map((item, index) => {
                            return <CartItem item={item} index={index} key={`cart-item-${index}`} />;
                        })}
                    </div>
                ) : (
                    <p className="empty-cart-message">Your cart is empty</p>
                )}
                <div className="sub-total-container">
                    <h5>Sub-total</h5>
                    <h3>
                        {subTotal.value} {subTotal.currency}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
