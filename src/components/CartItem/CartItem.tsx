import { CartItem as CartItemType } from '../../types/CartItem';
import './CartItem.scss';

interface IProp {
    item: CartItemType;
}

const CartItem = ({ item }: IProp) => {
    const { image, name, price, amount } = item;

    return (
        <div className="cart-item">
            <div className="item-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="item-data">
                <h5 className="item-name">{name}</h5>
                <div className="item-price-amount">
                    {price.value} x {amount} {price.currency}
                </div>
            </div>
        </div>
    );
};

export default CartItem;
