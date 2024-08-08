import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="relative w-full " style={{ paddingBottom: "56.25%" }}>
      <video
        src="/bg.mp4"
        title="Background Video"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ border: "none" }}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoBackground;
