import React, { useRef, useState } from 'react'; 
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
function Video({url,channel,description,song,likes,messages,shares}) {

    const [playing,setPlaying]=useState(false);
    const videoRef=useRef(null);
    const onVideoPress=()=>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
        
    }

    return (
        <div className="video">
            <video
                loop
                ref={videoRef}
                onClick={onVideoPress}
                className="video__player"
                src={url}
                ></video>
                <VideoFooter
                    channel={channel}
                    description={description}
                    song={song}
                />
                <VideoSidebar
                    likes={likes}
                    shares={shares}
                    messages={messages}
                />
        </div>
    )
}

export default Video
