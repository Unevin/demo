import Image from 'next/image';
import React, { useState } from 'react';

const ImageLoader = ({ image, alt, className }) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="w-full h-full group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={alt}
          src={image}
          layout="fill"
          objectFit="cover"
          className={`
            duration-700 ease-in-out group-hover:opacity-75
            ${
              loading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }) ${className}`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default ImageLoader;
