import React, { useState, useEffect } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';

const App = () => {
  const [display, setDisplay] = useState('');

  const audioClips = [
    { key: 'Q', audio: 'heater-1.mp3', label: 'Heater 1' },
    { key: 'W', audio: 'heater-2.mp3', label: 'Heater 2' },
    { key: 'E', audio: 'heater-3.mp3', label: 'Heater 3' },
    { key: 'A', audio: 'heater-4.mp3', label: 'Heater 4' },
    { key: 'S', audio: 'clap.mp3', label: 'Clap' },
    { key: 'D', audio: 'open-hh.mp3', label: 'Open-HH' },
    { key: 'Z', audio: 'kickhat.mp3', label: 'KickHat' },
    { key: 'X', audio: 'kick.mp3', label: 'Kick' },
    { key: 'C', audio: 'closed-hh.mp3', label: 'Closed-HH' },
  ];

  const playAudio = (key) => {
    const clip = audioClips.find(c => c.key === key.toUpperCase());
    if (clip) {
      const audio = document.getElementById(clip.key);
      if (audio) {
        audio.currentTime = 0;
        audio.play();
        setDisplay(clip.label);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log(e.key);  
      const key = e.key.toUpperCase();
      if (['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'].includes(key)) {
        playAudio(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {audioClips.map((clip) => (
          <DrumPad
            key={clip.key}
            clip={clip}
            playAudio={playAudio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
