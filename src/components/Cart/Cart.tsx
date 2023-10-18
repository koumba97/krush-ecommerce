import { useContext } from 'react';
import Button from '../ui/Button/Button';
import Dropdown from '../ui/Dropdown/Dropdown';
import './Cart.scss';
import { CartContext } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';
import { Colors } from '../../types/Colors';

interface IProp {
    className?: string;
    id?: string;
}
const Cart = ({ className, id }: IProp) => {
    const { cartItems, cartItemsAmount } = useContext(CartContext);

    return (
        <Dropdown
            triggerItem={
                <div className={`${className} cart-icon`} id={id}>
                    <i className="las la-shopping-bag"></i>
                    <div className="item-amount-wrapper">
                        <div className="item-amount">{cartItemsAmount}</div>
                    </div>
                </div>
            }
        >
            <div className="cart-content">
                {cartItems.length > 0 ? (
                    <div className="list">
                        {cartItems.map((item, index) => {
                            return <CartItem item={item} key={`cart-item-${index}`} />;
                        })}
                    </div>
                ) : (
                    <p className="empty-cart-message">Your cart is empty</p>
                )}

                <div className="sub-total-container">
                    <h5>Sub-total</h5>
                    <h3>100 €</h3>
                </div>
                <Button color={Colors.secondary} disabled={cartItems.length === 0}>
                    Checkout
                </Button>
            </div>
        </Dropdown>
    );
};

export default Cart;
