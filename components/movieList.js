import React from "react";
import Link from "next/link";

class MovieList extends React.Component {
  shorten = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substr(0, maxLength) + "...";
    }
    return text;
  };

  renderMovies(movies) {
    return movies.map((movie) => (
      <div key={movie.id} className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
            <a>
              <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            </a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                <a className="text-dark">{movie.title}</a>
              </Link>
            </h4>
            <div className="movie-genre text-muted">{movie.genre}</div>
            <p className="card-text">{this.shorten(movie.overview, 100)}</p>
            <p className="card-text">
              <small className="text-muted">{`Release date: ${movie.release_date}`}</small>
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.vote_average}</small>
          </div>
        </div>
      </div>
    ));
  }

  // TODO: Implement pagination. The themoviedb api is prepared.

  render() {
    const { movies } = this.props;
    return <React.Fragment>{this.renderMovies(movies)}</React.Fragment>;
  }
}

export default MovieList;
