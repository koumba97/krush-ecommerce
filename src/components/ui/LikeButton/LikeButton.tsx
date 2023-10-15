import './LikeButton.scss';
import { useState } from 'react';

interface IProps {
    isLiked: boolean;
}

export const LikeButton = ({ isLiked }: IProps) => {
    const [liked, setLiked] = useState<Boolean>(isLiked);

    const handleClick = (e: any) => {
        e.stopPropagation();
        console.log('like');

        setLiked(!liked);
    };

    return (
        <div className="like-button" onClick={handleClick}>
            {liked ? <i className="las la-heart active"></i> : <i className="lar la-heart"></i>}
        </div>
    );
};
