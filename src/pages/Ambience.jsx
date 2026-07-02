import React from "react";

const Ambience = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dgfp5n7bn/video/upload/v1782980079/Ambience_Video_npbf05.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Ambience;
