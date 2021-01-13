import React from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import './style.less';


export default ((props: ReactPlayerProps) => {
    return (
    <div className="playlist-player">
        <ReactPlayer {...props}/>
    </div>)
})