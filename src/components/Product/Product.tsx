import ProductGallery from '../ProductGallery/ProductGallery';
import './Product.scss';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../ui/Button/Button';
import { LikeButton } from '../ui/LikeButton/LikeButton';
import InputNumber from '../ui/InputNumber/InputNumber';

const defaultFormFields = {
    amount: 0,
};

const Product = () => {
    const [productValue, setProductValue] = useState(defaultFormFields);
    const { amount } = productValue;
    const { productId } = useParams<{ productId: string }>();
    const { products } = useContext(ProductsContext);

    const productData = products.find((product) => product.id === Number(productId));

    const handleInputChange = (newValue: { name: 'amount'; value: number }) => {
        setProductValue({ [newValue.name]: newValue.value });
        console.log(newValue);
    };

    return (
        <div className="product">
            <div>
                <Link to="/" className="back-link">
                    <i className="las la-angle-left"></i> Back
                </Link>
                <ProductGallery images={productData ? productData.images : []} />
            </div>
            <div className="product-details-container">
                <div className="top">
                    <h3 className="product-name">{productData?.name}</h3>
                    <LikeButton isLiked={false} />
                </div>

                <p>{productData?.description}</p>

                <div className="bottom">
                    <Button icon="las la-cart-plus">Add to cart</Button>
                    <InputNumber name="amount" min={0} max={5} value={amount} onChange={handleInputChange} />
                </div>
            </div>
        </div>
    );
};

export default Product;
