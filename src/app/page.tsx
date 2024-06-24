"use client"

import { useState } from "react";
import { VideoPlayer } from "@/components/VideoPlayer";

const Page = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">{playing ? 'Video Rodando' : 'Video Parado'}</p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={() => setPlaying(!playing)}>Play/Pause</button>
      </div>

      <VideoPlayer 
        src="https://www.youtube.com/watch?v=AMylP-Pmb_g" // URL do vídeo do YouTube
        isPlaying={playing}
      />
    </div>
  );
};

export default Page;
