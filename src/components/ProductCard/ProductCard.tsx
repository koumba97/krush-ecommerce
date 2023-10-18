import { Link } from 'react-router-dom';
import { Product as ProductType } from '../../types/Product';
import { LikeButton } from '../ui/LikeButton/LikeButton';
import './ProductCard.scss';
import { useState } from 'react';

interface IProps {
    product: ProductType;
}

export const ProductCard = ({ product }: IProps) => {
    const [imageCover, setImageCover] = useState(product.images[0]);

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <div
                    className="image-article"
                    style={{ backgroundImage: `url(${imageCover})` }}
                    onMouseEnter={() => setImageCover(product.images[1])}
                    onMouseLeave={() => setImageCover(product.images[0])}
                >
                    <LikeButton isLiked={false} />
                    {product.bestseller ? <div className="bestseller-label">Bestseller</div> : null}
                </div>
            </Link>

            <div className="article-details-container">
                <Link to={`/product/${product.id}`}>
                    <h3 className="article-name">{product.name}</h3>
                </Link>
                <p className="article-price">
                    {product.price.value} {product.price.currency}
                </p>
            </div>
        </div>
    );
};
