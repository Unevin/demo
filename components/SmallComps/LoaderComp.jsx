import React from 'react';
import { Circles } from 'react-loader-spinner';

const LoaderComp = ({ className, height }) => {
  return (
    <div className={className}>
      <Circles
        height={height || '120'}
        width={height || '120'}
        color="#DFDFDF"
        ariaLabel="circles-loading"
        wrapperStyle={{
          borderRadius: '50%',
        }}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default LoaderComp;
