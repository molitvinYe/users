import React, { useState } from "react";
import { ImageContainer, DefaultImage } from "./UserImage.styled";

const UserImage: React.FC<{ photo: string }> = ({ photo }) => {
  const [isImageLoad, setIsImageLoad] = useState(true);

  return (
    <ImageContainer>
      {isImageLoad ? (
        <img
          src={photo}
          onError={() => setIsImageLoad(false)}
          alt="user photo"
        />
      ) : (
        <DefaultImage />
      )}
    </ImageContainer>
  );
};

export default UserImage;
