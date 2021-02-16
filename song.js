//  Homework #1: Data Types

// create a constructor

function FavSong(artist, otherArtists, album, producer, recorded, released, song, genre, popular) {
    this.artist = artist;
    this.otherArtists = otherArtists;
    this.album = album;
    this.producer = producer;
    this.recorded = recorded;
    this.released = released;
    this.song = song;
    this.genre = genre;
    this.popular = popular;
    this.sayYeah = function () {
        console.log("Is this song good?" + "\n" + "Answer: " + this.song);
    }
}

// Create a new instance of FavSong
let myFavSong = new FavSong("Usher", "Lil`Jon & Ludacris", "Confessions", "Lil Jon", 2003, 2004, "Yeah!", "Hip-Hop", true);
console.log("Hello");
console.log(myFavSong);
console.log(myFavSong.album);
myFavSong.sayYeah();

// Using variables

let artist = "Usher";
let otherArtists = "Lil`Jon & Ludacris";
let album = "Confessions";
let producer = "Lil Jon";
let recorded = 2003;
let released = 2004;
let song = "Yeah!";
let genre = "Hip-Hop";
let popular = true;

console.log(artist);
console.log(otherArtists);
console.log(album);
console.log(producer);
console.log(recorded);
console.log(released);
console.log(song);
console.log(genre);
console.log(popular);

// Using Arrays

let mySongArray = new Array();

mySongArray[0] = {
    artist: "Usher"
};
mySongArray[1] = {
    otherArtists: "Lil Jon & Ludacris"
};
mySongArray[2] = {
    album: "Confessions"
};
mySongArray[3] = {
    producer: "Lil Jon"
};
mySongArray[4] = {
    recorded: 2003
};
mySongArray[5] = {
    released: 2004
};
mySongArray[6] = {
    song: "Yeah!"
};
mySongArray[7] = {
    genre: "HIp-Hop"
};
mySongArray[7] = {
    popular: true
};

console.log(mySongArray);
console.log(mySongArray[0]);
console.log(mySongArray[6]);

// Using multidimentional array

let myFavSongArray = [["artist", "Usher"], ["otherArtists", "Lil Jon & Ludacris"], ["album", "Confessions"],
["producer", "Lil Jon"], ["recorded", 2003], ["released", 2004], ["song", "Yeah!"], ["genre", "Hip-Hop"], ["popular", true]];

console.log(myFavSongArray);
console.log(myFavSongArray[0][1]);
console.log(myFavSongArray[6][1]);