import { useEffect, useState } from 'react';
import './ProductGallery.scss';

interface IProp {
    images: string[];
}

const ProductGallery = ({ images }: IProp) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeSlideImg, setActiveSlideImg] = useState(images[activeSlideIndex]);

    useEffect(() => {
        setActiveSlideImg(images[activeSlideIndex]);
    }, [activeSlideIndex, images]);

    const updateActiveSlide = (slideIndex: number) => {
        if (slideIndex < 0) {
            slideIndex = images.length - 1;
        } else if (slideIndex > images.length - 1) {
            slideIndex = 0;
        }
        setActiveSlideIndex(slideIndex);
    };
    return (
        <div className="product-gallery">
            {activeSlideImg ? (
                <div className="slide-container">
                    {images.map((image: string, index) => (
                        <div
                            className={`slide-wrapper ${index === activeSlideIndex ? 'active' : ''}`}
                            key={`slide-${index}`}
                        >
                            <div
                                className="slide"
                                style={{ backgroundImage: `url(${image})` }}
                                onClick={() => updateActiveSlide(index)}
                            ></div>
                        </div>
                    ))}
                </div>
            ) : null}
            <div className="active-slide" style={{ backgroundImage: `url(${activeSlideImg})` }}>
                <button className="slide-control-btn" onClick={() => updateActiveSlide(activeSlideIndex - 1)}>
                    <i className="las la-angle-left"></i>
                </button>
                <button className="slide-control-btn" onClick={() => updateActiveSlide(activeSlideIndex + 1)}>
                    <i className="las la-angle-right"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductGallery;
