import ProductGallery from '../ProductGallery/ProductGallery';
import './Product.scss';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { productId } = useParams<{ productId: string }>();
    const { products } = useContext(ProductsContext);

    const productData = products.find((product) => product.id === Number(productId));
    return (
        <div className="product">
            <ProductGallery images={productData ? productData.images : []} />
            <div>
                <h3>{productData?.name}</h3>
                <p>{productData?.description}</p>
            </div>
        </div>
    );
};

export default Product;
