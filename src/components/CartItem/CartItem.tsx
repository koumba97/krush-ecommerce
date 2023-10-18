import { CartItem as CartItemType } from '../../types/CartItem';
import InputNumber from '../ui/InputNumber/InputNumber';
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
                    <p>
                        {price.value} {price.currency} X {amount}
                    </p>
                    <InputNumber value={amount} min={0} name="cart-item" />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
