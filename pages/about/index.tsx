import { useEffect, useState, useRef } from 'react';
import YouTube, { YouTubeProps }  from 'react-youtube';

// import { listAllVideos } from '../../components/youtube';
const YT_API_SCRIPT = 'https://www.youtube.com/player_api';

export default function VideosPage(videos) {
  const playerRef = useRef(null);

  // useEffect(() => {
  //   alert(JSON.stringify(videos.videos.items))
  // });

  const YouTubePlayer = ({ videoId, width }) => {
    const handleVideoReady = (event) => {
      // Video is ready to be played
    };
  
    const handleVideoPlay = (event) => {
      // Video has started playing
    };
  
    const playerOptions = {
      width: width,
      // height:0
    };

  
    return (
      <div className="w-full">
        <YouTube
          videoId={videoId}
          opts={playerOptions}
          onReady={handleVideoReady}
          onPlay={handleVideoPlay}
          // Add more event handlers here
        
         
        />
        
      </div>
    );
  };


  return (

    <div className="py-20" >
     
      <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10">
    
      {(videos.videos.items).map((video) => (
        <div key={video.id.videoId}>
<YouTubePlayer videoId={video.id.videoId} width="100%" />
<h2 className="text-lg font-medium mt-2 text-white">{video.snippet.title}</h2>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const response = await fetch ('https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyD7A1fIVaRcqwK6l187-BB52JiEqr7Lmdc&channelId=UCnXXusQQ65Q6vPRe0ve26cA&part=snippet&type=video')
  const videos = await response.json();

  return {
    props: {
      // response.data.items
      videos
    },
  };
}