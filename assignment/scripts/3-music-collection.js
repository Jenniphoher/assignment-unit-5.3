console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

console.log('====== ADD ALBUM FUNCTION ======');

let myCollection = [];
let trackArray = [];

function addToCollection(collection, title, artist, yearPublished) {
  let album = {
    title,
    artist,
    yearPublished
  };
  collection.push(album);
  return album;
}

console.log(addToCollection(myCollection, 'Eye of the Storm', 'ONE OK ROCK', 2019));
console.log(addToCollection(myCollection, 'First Love', 'Hikaru Utada', 1999));
console.log(addToCollection(myCollection, 'Atlas: I', 'Sleeping At Last', 2014));
console.log(addToCollection(myCollection, 'Purpose', 'Justin Bieber', 2015));
console.log(addToCollection(myCollection, 'Justice', 'Justin Bieber', 2021));
console.log(addToCollection(myCollection, 'Where the Earth Meets the Sky', 'Marcus Warner', 2019));
console.log(myCollection);





console.log('====== SHOW ALBUM FUNCTION ======');

function showCollection(collection) {
  for(album of collection) {
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
  }
}

showCollection(myCollection);





console.log('====== FIND ARTIST FUNCTION ======');

function findByArtist(collection, artist) {
  let sameArtist = [];
  for(album of collection) {
    if(album.artist === artist) {
      sameArtist.push(album);
    }
  } return sameArtist;
}

console.log(findByArtist(myCollection, "Justin Bieber"));
console.log(findByArtist(myCollection, "Tori Kelly"));





console.log('====== SEARCH FUNCTION ======');

function search(collection, searchCriteria) { //collection and searchCriteria are parameters
  let results = [];
  for(album of collection) {
    if(typeof searchCriteria != 'object' || Object.keys(searchCriteria).length === 0 || searchCriteria.artist === '' || searchCriteria.yearPublished === '') {
      return collection;
    } else if(searchCriteria.artist === album.artist && searchCriteria.yearPublished === album.yearPublished) {
      results.push(album);
    }
  } return results;
}

console.log(search(myCollection, {artist: 'Ray Charles', yearPublished: 1957}));
console.log(search(myCollection, {artist: 'ONE OK ROCK', yearPublished: 2019})); // myCollection and {} are arugments
console.log(search(myCollection, {}));
console.log(search(myCollection));
console.log(search(myCollection, {artist: 'Taya'}));
console.log(search(myCollection, {yearPublished: 8374}));




console.log('====== EXTRA TRACKS FUNCTION ======'); // HAVEN'T COMPLETED YET. LATE BC I WAS WORKING ON THIS.

function trackList(collection, title, name, duration) {
  let track = {
    name,
    duration
  } 
  if(trackArray.indexOf(title) === -1) {
    trackArray.push(title);
    trackArray[title] = [];
    console.log(`Created: ${title}`);
    for(let album of collection) {
      if(album.title === title) {
        trackArray[title].push(track);
        return trackArray;
      }
    } 
  } else {
    console.log(`New track added to: ${title}`);
    for(let album of collection) {
      if(album.title === title) {
        trackArray[title].push(track);
        return trackArray;
      }
    } 
  } 
}

console.log(trackList(myCollection, 'Eye of the Storm', 'Change', 2 + ':' + 56));
console.log(trackList(myCollection, 'Eye of the Storm', 'Stand Out Fit In', 3 + ':' + 34));
console.log(trackList(myCollection, 'First Love', 'Automatic', 5 + ':' + 28));
console.log(trackList(myCollection, 'First Love', 'First Love', 4 + ':' + 18));
console.log(trackList(myCollection, 'Atlas: I', 'Saturn', 4 + ':' + 50));
console.log(trackList(myCollection, 'Atlas: I', 'Light', 4 + ':' + 23));
console.log(trackList(myCollection, 'Purpose', 'Sorry', 3 + ':' + 20));
console.log(trackList(myCollection, 'Purpose', 'Where Are U Now', 4 + ':' + 0o5));
console.log(trackList(myCollection, 'Justice', 'Hold On', 2 + ':' + 51));
console.log(trackList(myCollection, 'Justice', 'Ghost', 2 + ':' + 33));
console.log(trackList(myCollection, 'Where the Earth Meets the Sky', 'The Highlands', 2 + ':' + 50));
console.log(trackList(myCollection, 'Where the Earth Meets the Sky', 'Baby Seal', 1 + ':' + 37));

console.log('====== ADD UPDATE FUNCTION ======');

function addToCollection(collection, title, artist, yearPublished, tracks) {
  let album = {
    title,
    artist,
    yearPublished,
  }
  
  if(typeof tracks != 'undefined') {
    for(let name of collection) {
      if(name.title === tracks[tracks.indexOf(title)]) {
        name.songs = tracks[title];
        return collection;
      } } 
  } else {
    collection.push(album);
    console.log('Tracks added later.');
    return album;
  }
} 

console.log(addToCollection(myCollection, 'Eye of the Storm', '', '', trackArray));
console.log(addToCollection(myCollection, 'First Love', '', '', trackArray));
console.log(addToCollection(myCollection, 'Atlas: I', '', '', trackArray));
console.log(addToCollection(myCollection, 'Purpose', '', '', trackArray));
console.log(addToCollection(myCollection, 'Justice', '', '', trackArray));
console.log(addToCollection(myCollection, 'Where the Earth Meets the Sky', '', '', trackArray));





console.log('====== UPDATE SHOW FUNCTION ======');

function showCollection(collection, tracks) {
  if(typeof tracks != 'undefined') {
    let withSongs;
    for(album of collection) {
      let albumSong = album.songs;
      withSongs = console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}:\n1. ${albumSong[0].name}: ${albumSong[0].duration}\n2. ${albumSong[1].name}: ${albumSong[1].duration}`);
    } return withSongs;
  } else {
    for(album of collection) {
      console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
    }
  }
}

console.log(showCollection(myCollection, trackArray));




console.log('====== SEARCH UPDATE FUNCTION ======');

function search(collection, searchCriteria, trackCriteria) { 
  let results = [];
  if (typeof trackCriteria === 'object') {
    for(album of collection) {
      let albumSong = album.songs;
      if(trackCriteria.name === albumSong[0].name) {
        results.push(albumSong[0].name);
        return results;
      } else if(trackCriteria.name === albumSong[1].name) {
        results.push(albumSong[1].name);
        return results;
      } 
    } return 'No Song Title match.'
  } else if(typeof trackCriteria != 'object' || Object.keys(trackCriteria).length === 0 || trackCriteria.name === '' ) {
    for(album of collection) {
      if(typeof searchCriteria != 'object' || Object.keys(searchCriteria).length === 0 || searchCriteria.artist === '' || searchCriteria.yearPublished === '') {
        return collection;
      } else if(searchCriteria.artist === album.artist && searchCriteria.yearPublished === album.yearPublished) {
        results.push(album);
      }
    } return results;
  } 
}

console.log(search(myCollection, {artist: 'Ray Charles', yearPublished: 1957}, {name: 'Stand Out Fit In'}));
console.log(search(myCollection, {artist: 'ONE OK ROCK', yearPublished: 2019}, {name: 'Saturn'})); 
console.log(search(myCollection, {}, {name: 'Dynamite'}));
console.log(search(myCollection, {artist: 'Taya'}, {}));
console.log(search(myCollection, {artist: 'Justin Bieber', yearPublished: 2015})); 



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}