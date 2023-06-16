import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            isPlaying={isPlaying}
            audioRef={audioRef}
            key={song.id}
            id={song.id}
            setCurrentSong={setCurrentSong}
            songs={songs}
            song={song}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};
export default Library;
