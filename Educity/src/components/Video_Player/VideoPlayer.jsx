import React, { useRef } from 'react';
import video from "../../assets/college-video.mp4";
import './videoPlayer.css';

const VideoPlayer = ({ show, setShow }) => {
    const player = useRef(null);

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setShow(false);
        }
    }

    return (
        <div className={`video-player ${show ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay loop muted></video>
        </div>
    );
}

export default VideoPlayer;
