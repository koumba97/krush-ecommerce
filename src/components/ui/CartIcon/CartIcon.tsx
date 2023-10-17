import './CartIcon.scss';

interface IProp {
    itemAmount?: number;
    className?: string;
    id?: string;
}
const CartIcon = ({ itemAmount = 0, className, id }: IProp) => {
    return (
        <div className={`${className} cart-icon`} id={id}>
            <i className="las la-shopping-bag"></i>
            <div className="item-amount-wrapper">
                <div className="item-amount">{itemAmount}</div>
            </div>
        </div>
    );
};

export default CartIcon;
