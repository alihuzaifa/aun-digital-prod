import React from "react";

const VideoBackground: React.FC = () => {
  return (
    // <div
    //   className="relative w-full hidden md:block"
    //   style={{ paddingBottom: "56.25%" }}
    // >
    //   <iframe
    //     src="https://player.vimeo.com/video/995418774?h=58956de3da&background=1"
    //     title="Video"
    //     className="absolute top-0 left-0 w-full h-full"
    //     style={{ border: "none" }}
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //     allowFullScreen
    //   ></iframe>
    // </div>
    <div
      className="relative w-full hidden md:block"
      style={{ paddingBottom: "56.25%" }}
    >
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
