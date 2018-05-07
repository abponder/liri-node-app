require("dotenv").config();

var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var keys = require("./keys");
    // console.log(keys.twitter);

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var programTorun = process.argv[2]
var programAction = process.argv[3]

    if (programTorun == "my-tweets") {
        myTweets ()
    }else if (programTorun == "spotify-this-song") {
        spotifyThisSong ()
    }else if (programTorun == "movie-this") {
        movieThis ()
    }else if (programTorun == "do-what-it-says") {
        doWhatItSays ()
    }else {
        console.log("you need to specify a program to run");
    }

    function myTweets () {
        var params = {screen_name: 'alexbponder'};
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                for (var i = 0; i < 5; i++) {
                    console.log(tweets[i].created_at.slice(0, 19));
                    console.log(tweets[i].text);
                    console.log("");
                }
             
              
            }
        });
    }

    function spotifyThisSong () {
        spotify.search({ type: 'artist', query: "Broken dreams" }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
                
                console.log(data.artists); 
                
          });
    }

    function movieThis () {
        console.log("running movie program");
    }

    function doWhatItSays () {
        console.log("running do what it says");
    }




//     * Artist(s)
//     * The song's name
//     * A preview link of the song from Spotify
//     * The album that the song is from
//   * If no song is provided then your program will default to "The Sign" by Ace of Base.



