import React, { useEffect, useState } from 'react';

import { Spinner } from './ImageBox.styles';

interface IImageBoxProps {
  path: string;
  width?: number;
  height?: number;
  alt: string;
}

const IMAGE_DEFAULT_WIDTH = 180;
const IMAGE_DEFAULT_HEIGHT = 180;

const ImageBox = ({ path, width = IMAGE_DEFAULT_WIDTH, height = IMAGE_DEFAULT_HEIGHT, alt }: IImageBoxProps) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImgLoaded(true);
  };

  useEffect(() => {
    const img = new Image();
    img.src = path;
    img.onload = handleImageLoad;
  }, [path]);

  return (
    <React.Fragment>
      {!isImgLoaded && <Spinner />}
      <img
        src={path}
        alt={alt}
        width={width}
        height={height}
        loading='lazy'
        onLoad={handleImageLoad}
        style={{ display: isImgLoaded ? 'block' : 'none' }}
      />
    </React.Fragment>
  );
};

export default ImageBox;
