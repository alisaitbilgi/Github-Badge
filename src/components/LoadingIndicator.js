import React from "react";
import loading from "../../public/styles/images/loading.svg";

export function LoadingIndicator() {
  return (
    <div className="styleOfIframe">
      <img className="loader" src={loading} alt="loading..."/>
    </div>
  );
}
