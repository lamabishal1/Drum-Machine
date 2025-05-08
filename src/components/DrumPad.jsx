import React from 'react';

const DrumPad = ({ clip, playAudio }) => {
  const handleClick = () => {
    playAudio(clip.key);
  };

  return (
    <div
      className="drum-pad"
      id={clip.label}
      onClick={handleClick}
    >
      {clip.key}
      <audio
        className="clip"
        id={clip.key}
        src={`./sounds/${clip.audio}`}
        preload="auto"
      />
    </div>
  );
};

export default DrumPad;
