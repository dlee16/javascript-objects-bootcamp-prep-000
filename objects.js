var playlist = { artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle){
  var play= {};
  Object.assign({}, playlist, artistName:"songTitle")
  return playlist
}