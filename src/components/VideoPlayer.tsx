// components/VideoPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';

type Props = {
  src: string;
  isPlaying: boolean;
};

export const VideoPlayer = ({ src, isPlaying }: Props) => {
  return (
    <div className="video-wrapper">
      <ReactPlayer url={src} playing={isPlaying} controls width="100%" height="100%" />
    </div>
  );
};
