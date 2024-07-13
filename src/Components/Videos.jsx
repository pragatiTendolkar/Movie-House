import React, { useEffect, useState } from 'react';

const Videos = ({ movieId }) => {
  const [video, setVideo] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=831780a63e8202e8b7590cfc472f8c44`);
        const data = await response.json();
        if (data.results.length > 0) {
          setVideo(data.results[0]); // Get only the first video
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideo();
  }, [movieId]);

  return (
    <div>
      {video ? (
        <div key={video.id}>
          <h3>{video.name}</h3>
          <button onClick={() => setShowTrailer(true)}>Watch Trailer</button>
          {showTrailer && (
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.name}
            ></iframe>
          )}
        </div>
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
};

export default Videos;
