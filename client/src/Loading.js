import React from 'react';
import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <Loader
      type="ThreeDots"
      color="#3f51b5"
      height={300}
      width={300}
      timeout={8000}
    />
  )
}