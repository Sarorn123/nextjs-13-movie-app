"use client"

import React from 'react';
import { Circles } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="container flex justify-center mt-52" >
      <Circles height="80" width="80" color="blue" ariaLabel="loading" />
    </div>
  )
}

export default LoadingSpinner;