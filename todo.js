let state = [{
    title: 'Strike for delete workS',
    striked: true
}]

function render (state) {
   

    let html = ""
    for(let i=0; i< state.length; i++) {
        if (state[i].striked) {
            html += `<li class="strike">${state[i].title}</li>`
        } else {
            html += `<li>${state[i].title}</li>`
        }
    }
    return html
}

function paint () {
    const songList = document.getElementById('playlist')
    document.getElementById('inputbox').value = ""
    songList.innerHTML = render(state)

}


window.onload = function () {
    const addButton = document.getElementById('addbutton')
    addButton.addEventListener('click', function () {
        const input = document.getElementById('inputbox')
        state.push({
            title: input.value,
            striked: false
        })
        paint()
    })
}

paint()

const songList = document.getElementById('playlist')
songList.addEventListener('click', function (e) {
    const title = e.target.innerHTML
    const selectedSong = state.find(function (song)  {
        return song.title === title
    })
    selectedSong.striked = !selectedSong.striked
    paint()
})

document.getElementById('binButton').addEventListener('click', function () {
    state = state.filter(function (song) {
        return !song.striked
    })
    paint()
})

/*
// playlist

function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};
 
Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if (this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  };
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for (i = 0; i < this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};

// media

function Media(title, year, duration) {
  this.title = title;
  this.duration = duration;
  this.isPlaying = false;
}

Media.prototype.play = function() {
  this.isPlaying = true;
};

Media.prototype.stop = function() {
  this.isPlaying = false;
};

// songs

function Song(title, artist, duration) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

Song.prototype.toHTML = function() {
 var htmlString = '<li';
  if(this.isPlaying) {
 htmlString += ' class="current"';
  }
 htmlString += '>';
 htmlString += this.title;
 htmlString += ' - ';
 htmlString += this.artist;
 htmlString += '<span class="duration">';
 htmlString += this.duration;
 htmlString += '</span></li>';
 return htmlString;
};


// app

var playlist = new Playlist();

var UntilTheEndOfTime = new Song("calma", "2Pac", "00.59");
var BennyAndTheJets = new Song("otilia billinor", "Elton John", "00.13");
var HoundsOfLove = new Song("maroon5", "Kate Bush", "00.21");
var RambleOnLive = new Song("kaun hoyega", "Led Zepplin", "00.32");

playlist.add(calma);
playlist.add(otiliabillinor);
playlist.add(maroon5);
playlist.add(kaunhoyega);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);

var playButton = document.getElementById('play');
playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
};
var nextButton = document.getElementById('next');
nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
};
var stopButton = document.getElementById('stop');
stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
};


// try adding shuffle / back button?

//  get help making a common object that other media can inherit from - so playlist can hold songs as well as movies for example.

// Songs.prototype = Object.create(Media.prototype);
*/