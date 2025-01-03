"use client"
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
          className="p-2 rounded-full relative left-60 top-5"
          onClick={() => setLiked(!liked)}   >
      {liked ? (
        <AiFillHeart className="text-red-500 w-6 h-6" />
      ) : (
        <AiOutlineHeart className="text-gray-500 w-6 h-6" />
      )}
    </button>
  );
};

export default LikeButton;
