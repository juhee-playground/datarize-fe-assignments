import React, { useEffect, useState } from 'react';
import { Spinner } from './ImageBox.styles';

type IImageBoxProps = {
  path: string;
  width?: number;
  height?: number;
  alt: string;
};

const ImageBox = ({ path, width = 180, height = 180, alt }: IImageBoxProps) => {
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
