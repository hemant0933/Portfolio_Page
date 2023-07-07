import React from "react";
import "./LoaderStyle.css";

const LoadingComponent = () => {
  return (
    <div class="loader">
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
      <div class="loader__circle"></div>
    </div>
  );
};

export default LoadingComponent;
