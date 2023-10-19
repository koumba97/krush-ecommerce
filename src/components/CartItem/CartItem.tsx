import { useContext } from 'react';
import { CartItem as CartItemType } from '../../types/CartItem';
import InputNumber from '../ui/InputNumber/InputNumber';
import './CartItem.scss';
import { CartContext } from '../../contexts/CartContext';

interface IProp {
    item: CartItemType;
    index: number;
}

const CartItem = ({ item, index }: IProp) => {
    const { image, name, price, amount } = item;
    const { updateItemAmount } = useContext(CartContext);

    const updateAmount = (newValue: { name: string; value: number }) => {
        updateItemAmount(index, newValue.value);
    };

    return (
        <div className="cart-item">
            <div className="item-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="item-data">
                <h5 className="item-name">{name}</h5>
                <div className="item-price-amount">
                    <p>
                        {price.value} {price.currency} X {amount}
                    </p>
                    <InputNumber value={amount} min={0} name="cart-item" onChange={updateAmount} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;
