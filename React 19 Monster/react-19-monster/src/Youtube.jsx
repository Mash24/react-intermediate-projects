import { useState } from 'react';
import './Youtube.css';

function Youtube() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const getVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getVideoId(videoUrl);

  return (
    <div className="youtube-container p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">YouTube Video Player</h2>
      <div className="mb-4">
        <input
          type="text"
          value={videoUrl}
          onChange={handleInputChange}
          placeholder="Enter YouTube video URL"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {videoId && (
        <div className="video-wrapper">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Youtube;
