import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div
      className="relative w-full hidden md:block"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        src="https://player.vimeo.com/video/995418774?h=58956de3da&background=1"
        title="Video"
        className="absolute top-0 left-0 w-full h-full"
        style={{ border: "none" }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
