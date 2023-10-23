import ProductGallery from '../ProductGallery/ProductGallery';
import './Product.scss';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../ui/Button/Button';
import { LikeButton } from '../ui/LikeButton/LikeButton';
import InputNumber from '../ui/InputNumber/InputNumber';
import { CartContext } from '../../contexts/CartContext';
import { Product as ProductType } from '../../types/Product';
import { CategoryType } from '../../types/CategoryType';

const defaultFormFields = {
    amount: 1,
};

const Product = () => {
    const [productAmount, setProductAmount] = useState(defaultFormFields);
    const { amount } = productAmount;
    const [productData, setProductData] = useState<ProductType | null>(null);

    const { categoryName, productId } = useParams<{ categoryName: CategoryType; productId: string }>();
    const { getProductById } = useContext(CategoriesContext);
    const { addItemToCart } = useContext(CartContext);

    useEffect(() => {
        const getProduct = async () => {
            if (categoryName) {
                const resp = await getProductById(categoryName, productId);
                if (resp) {
                    setProductData(resp);
                }
            }
        };
        getProduct();
    }, []);

    const handleInputChange = (newValue: { name: 'amount'; value: number }) => {
        setProductAmount({ [newValue.name]: newValue.value });
    };

    const addToCartHandler = () => {
        if (productAmount && productData) addItemToCart(productData, amount);
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
                <h3 className="product-price">
                    {productData?.price.value} {productData?.price.currency}
                </h3>

                <p>{productData?.description}</p>

                <div className="bottom">
                    <Button icon="las la-cart-plus" onClick={addToCartHandler}>
                        Add to cart
                    </Button>
                    <InputNumber name="amount" min={1} max={5} value={amount} onChange={handleInputChange} />
                </div>
            </div>
        </div>
    );
};

export default Product;
