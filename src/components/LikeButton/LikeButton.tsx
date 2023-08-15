import "./LikeButton.scss";
import { useState } from "react";

interface IProps {
  isLiked: boolean;
}

export const LikeButton = ({ isLiked }: IProps) => {
  const [liked, setLiked] = useState<Boolean>(isLiked);

  return (
    <div className="like-button" onClick={() => setLiked(!liked)}>
      {liked ? (
        <i className="las la-heart active"></i>
      ) : (
        <i className="lar la-heart"></i>
      )}
    </div>
  );
};
