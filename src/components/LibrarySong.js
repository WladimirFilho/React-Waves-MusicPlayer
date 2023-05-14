import React from "react";

const LibrarySong =({song, songs, setCurrentSong, id})=>{
    const songSelectedHandler = () =>{
        setCurrentSong(song)
        // const selectedSong = songs.filter((state) => state.id === id);
        // setCurrentSong(selectedSong[0])

    }

    return(


        <div
            className='library-song'
            onClick={songSelectedHandler}
        >

            {/* Song details */}
            <img
                src={song.cover}
                alt={song.name}
            />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}
export default LibrarySong;