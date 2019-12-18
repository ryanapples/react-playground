import { combinedReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "BOP", duration: "3:04" },
    { title: "Nice For What", duration: "4:30" },
    { title: "Slide", duration: "3:34" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combinedReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
