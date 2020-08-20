import React from "react";
import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById, updateMovie } from "../../../actions";
import Router from "next/router";

class EditMovie extends React.Component {
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);

    return { movie };
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie).then(() => {
      Router.push("/movies/[id]", `/movies/${movie.id}`);
    });
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="container-fluid">
        <h1>Edit the Movie</h1>
        <MovieCreateForm
          submitButton="Update"
          initialData={movie}
          handleFormSubmit={this.handleUpdateMovie}
        />
      </div>
    );
  }
}

export default EditMovie;
