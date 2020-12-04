import React, { useEffect, useState } from "react";
import './App.css';
import db from "./firebase";
import Video from "./Video";

function App() {

  const [videos,setVideos]=useState([]);

  useEffect(()=>{
      db.collection("videos").onSnapshot(snapshot=>setVideos(snapshot.docs.map(doc=>doc.data())))
  },[])
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(({
          url,channel,song,likes,messages,shares,description
        })=>(
          <Video
            url={url}
            channel={channel}
            description={description}
            likes={likes}
            song={song}
            messages={messages}
            shares={shares} 
          />
        ))}
        
        {/* <Video />
        <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
  );
}

export default App;
