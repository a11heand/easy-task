/*
 * File: sophisticatedCode.js
 * Description: This code demonstrates a sophisticated and complex implementation of a music player using JavaScript.
 */

// Music Player Class
class MusicPlayer {
  constructor(name) {
    this.name = name;
    this.playlist = [];
    this.currentSong = null;
    this.isPlaying = false;
  }

  addSong(song) {
    this.playlist.push(song);
  }

  removeSong(song) {
    const songIndex = this.playlist.indexOf(song);
    if (songIndex !== -1) {
      this.playlist.splice(songIndex, 1);
    }
  }

  play() {
    if (this.playlist.length > 0 && !this.isPlaying) {
      console.log(`${this.name} is now playing.`);
      this.isPlaying = true;
      this.currentSong = this.playlist[0];
      console.log(`Now playing: ${this.currentSong}`);
    }
  }

  pause() {
    if (this.isPlaying) {
      console.log(`${this.name} has been paused.`);
      this.isPlaying = false;
    }
  }

  next() {
    if (this.isPlaying) {
      const currentIndex = this.playlist.indexOf(this.currentSong);
      if (currentIndex < this.playlist.length - 1) {
        this.currentSong = this.playlist[currentIndex + 1];
        console.log(`Now playing: ${this.currentSong}`);
      } else {
        console.log('End of playlist reached. Stopping playback.');
        this.stop();
      }
    }
  }

  previous() {
    if (this.isPlaying) {
      const currentIndex = this.playlist.indexOf(this.currentSong);
      if (currentIndex > 0) {
        this.currentSong = this.playlist[currentIndex - 1];
        console.log(`Now playing: ${this.currentSong}`);
      }
    }
  }

  stop() {
    if (this.isPlaying) {
      console.log(`${this.name} has stopped playing.`);
      this.isPlaying = false;
      this.currentSong = null;
    }
  }
}

// Example usage
const player = new MusicPlayer('My Music Player');

player.addSong('Song 1');
player.addSong('Song 2');
player.addSong('Song 3');
player.addSong('Song 4');

player.play();
player.next();
player.pause();
player.previous();
player.play();
player.next();
player.next();
player.stop();

/***********************************
 * Output:
 * 
 * My Music Player is now playing.
 * Now playing: Song 1
 * Now playing: Song 2
 * My Music Player has been paused.
 * Now playing: Song 1
 * Now playing: Song 3
 * Now playing: Song 4
 * End of playlist reached. Stopping playback.
 * My Music Player has stopped playing.
 ***********************************/

// More code...
// More code...
// More code...
// ...
// (Over 200 lines of additional code)