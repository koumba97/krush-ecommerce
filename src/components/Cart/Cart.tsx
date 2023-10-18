import { useContext } from 'react';
import Button from '../ui/Button/Button';
import Dropdown from '../ui/Dropdown/Dropdown';
import './Cart.scss';
import { CartContext, CartProvider } from '../../contexts/CartContext';
import CartItem from '../CartItem/CartItem';

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
                {cartItems.map((item, index) => {
                    return <CartItem item={item} key={`cart-item-${index}`} />;
                })}
                <Button>Checkout</Button>
            </div>
        </Dropdown>
    );
};

export default Cart;
