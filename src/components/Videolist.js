import React from 'react';
import Videoitem from './Videoitem';

const Videolist = ({videos, onVideoSelect})=>{
    //props.video
    const renderlist = videos.map(video=>{
        return <Videoitem key ={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return <div className="ui relaxed divided list ">{renderlist}</div>
};

export default Videolist;