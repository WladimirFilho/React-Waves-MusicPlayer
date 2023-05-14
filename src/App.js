import Song from "./components/Song";
import Player from "./components/Player";
import './styles/app.scss'
import React, {useRef, useState} from "react";
import data from './util';
import Library from "./components/Library";

function App() {
    // State

    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration: duration})
    }


    return (
        <div className="App">
            <Song currentSong={currentSong}/>
            <Player
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                audioRef={audioRef}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                currentSong={currentSong}
            />
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}>
            </audio>
        </div>
    );
}

export default App;
