import React from "react";
import "./LoadingBox.css";
import "../../app/globals.css";
import Image from "next/image";
import loading from "../../assets/loading.gif";

export const LoadingBox = () => {
  return (
    <div className="loadingBox">
      <Image src={loading} alt="Loading" width={100} height={100} />
    </div>
  );
};
