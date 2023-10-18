import { useContext } from 'react';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import './CartIcon.scss';
import { CartContext, CartProvider } from '../../../contexts/CartContext';

interface IProp {
    className?: string;
    id?: string;
}
const CartIcon = ({ className, id }: IProp) => {
    const { cartItems } = useContext(CartContext);
    const itemAmount = cartItems.length;
    return (
        <Dropdown
            triggerItem={
                <div className={`${className} cart-icon`} id={id}>
                    <i className="las la-shopping-bag"></i>
                    <div className="item-amount-wrapper">
                        <div className="item-amount">{itemAmount}</div>
                    </div>
                </div>
            }
        >
            <div className="cart-content">
                {cartItems.map((item) => {
                    return <p>{item}</p>;
                })}
                <Button>Checkout</Button>
            </div>
        </Dropdown>
    );
};

export default CartIcon;
