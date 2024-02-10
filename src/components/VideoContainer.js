import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../constants';

const VideoContainer = () => {
    useEffect(()=>{
        getVideo();
    },[]);
const getVideo = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
}

  return (
    <div>VideoContainer</div>
  )
}

export default VideoContainer