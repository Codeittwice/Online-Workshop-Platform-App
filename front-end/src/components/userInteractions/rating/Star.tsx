import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating, setRating, count, size }: any) {
  // count:  number of stars you want, pass as props
  //size: size of star that you want

  const [hover, setHover] = useState<Number | undefined | null>(null);
  return (
    <div className="star-container">
      {[...Array(count || 5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label
            key={index}
            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <input
              type="radio"
              name="rating"
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            />
            <FaStar
              cursor={"pointer"}
              size={size || 20}
              transition="color 200ms"
            />
          </label>
        );
      })}
    </div>
  );
}
