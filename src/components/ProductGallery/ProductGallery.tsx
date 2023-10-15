import './ProductGallery.scss';

interface IProp {
    images: string[];
}

const ProductGallery = ({ images }: IProp) => {
    return (
        <div className="product-gallery">
            <div className="slide-container">
                {images.map((image: string) => (
                    <div className="slide" style={{ backgroundImage: `url(${image})` }}></div>
                ))}
            </div>
            <div className="active-slide" style={{ backgroundImage: `url(${images[0]})` }}></div>
        </div>
    );
};

export default ProductGallery;
