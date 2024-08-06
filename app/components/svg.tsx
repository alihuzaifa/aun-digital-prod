import React from "react";

function Svg({ imagePath }: { imagePath: string }) {
  return (
    <iframe
      src={imagePath}
      style={{ border: "none" }}
      width="100%"
      height="400px"
      title="Lottie Animation"
    />
  );
}

export default Svg;
