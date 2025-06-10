import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';

const CustomVideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    if(videoRef.current.paused) {
    videoRef.current.play();
    setIsPlaying(true);
    }else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }

  const handleVolumeChange = (e) => {
    videoRef.current.volume = e.target.value
  }
  return (
		<div>
			<video ref={videoRef} width='1200'>
				<source
					src='https://cdn.pixabay.com/video/2025/05/13/278750_tiny.mp4'
					type='video/mp4'
				/>
        Ваш браузер не поддерживает это видео
			</video>
      <div>
        <button onClick={handlePlayPause}>{isPlaying ? 'Пауза' : 'Возобновить'}</button>
        <input type='range' min='0' max='1' step='0.1' defaultChecked='0.5' onChange={handleVolumeChange}/>
      </div>
		</div>
	);
}

export default CustomVideoPlayer