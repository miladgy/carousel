import React from "react";

function Image({ src }) {
  return (
    <img
      className="image"
      src={src}
      alt="random pictures from unsplash"
    />
  );
}

export default Image;
