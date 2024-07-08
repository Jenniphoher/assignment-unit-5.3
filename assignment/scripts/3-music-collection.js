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
  if(trackArray.indexOf(title) != -1) {
    console.log(`New track added to: ${title}`);
  } else {
    trackArray.push(title);
    trackArray[title] = [];
  }

  for(album of collection) {
    if(album.title === title) {
      trackArray[title].push(track);
    }
  } return trackArray;
}

console.log(trackList(myCollection, 'Eye of the Storm', 'Change', 2 + ':' + 56));
console.log(trackList(myCollection, 'Eye of the Storm', 'Stand Out Fit In', 3 + ':' + 34));
console.log(trackList(myCollection, 'Eye of the Storm', 'Wasted Nights', 3 + ':' + 44));
// console.log(addTracks('Stand Out Fit In', 3 + ':' + 34));
// console.log(addTracks('Wasted Nights', 3 + ':' + 44));


function addToCollection(collection, title, artist, yearPublished, tracks) {
  let album = {
    title,
    artist,
    yearPublished,
    
  }
  
  if(tracks != 'array') {
    console.log('Tracks added later.');
    collection.push(album);
    return album;
  } else if(tracks === 'array') {
    for(let album of collection) {
      if(collection[album.title] === tracks[album]) {
        Object.assign(collection[album], tracks[album]);
        console.log('Track added.');
      } 
    }
  } return collection;
} 

console.log(myCollection, 'Eye of the Storm', null, null, trackArray);

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
