const movieArr = [];

class Movie {
  constructor(title, actor, genre) {
    this.title = title;
    this.actor = actor;
    this.genre = genre;
  }

  add() {
    movieArr.push(this);
  }
}

module.exports = {
  Movie,
  movieArr,
};
