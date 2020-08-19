import React from "react";
import MovieCreateForm from "../../../components/movieCreateForm";
import { getMovieById } from "../../../actions";

class EditMovie extends React.Component {
  // static getInitialProps({ query }) {
  //   return { query };
  // }
  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id);

    return { movie };
  }

  // state = {
  //   movie: {
  //     name: "",
  //     description: "",
  //     rating: "",
  //     image: "",
  //     cover: "",
  //     longDesc: "",
  //   },
  // };

  // componentDidMount() {
  //   const { id } = this.props.query;
  //   debugger;
  //   getMovieById(id).then((movie) => {
  //     this.setState({ movie });
  //   });
  // }

  render() {
    const { movie } = this.props;
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <MovieCreateForm initialData={movie} />
        {JSON.stringify(this.props.movie)}
      </div>
    );
  }
}

export default EditMovie;
