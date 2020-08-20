import { useRouter } from "next/router";
import { environment, getMovieById, deleteMovie } from "../../../actions";
import Link from "next/link";

const Movie = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const { movie } = props;

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="container-fluid">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="img-fluid"
        alt={movie.title}
      ></img>
      <div className="jumbotron">
        <h1 className="display-4">{movie.title}</h1>
        <p className="lead c-dark">{movie.tagline}</p>
        <hr className="my-4" />

        <ul className="list-group list-group-horizontal-sm mb-4">
          {movie.genres.map((genre) => (
            <span key={genre.id} className="badge badge-pill badge-dark mr-1">
              {genre.name}
            </span>
          ))}
        </ul>

        {movie.homepage && (
          <a
            className="btn btn-outline-dark btn-lg mr-1"
            href={movie.homepage}
            target="_blank"
            role="button"
          >
            Learn more
          </a>
        )}
        {environment === "dev" && (
          <React.Fragment>
            <button
              onClick={() => handleDeleteMovie(id)}
              className="btn btn-outline-danger btn-lg mr-1"
              href="#"
              role="button"
            >
              Delete
            </button>
            <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
              <button className="btn btn-outline-warning btn-lg" role="button">
                Edit
              </button>
            </Link>
          </React.Fragment>
        )}
      </div>
      <p className="lead c-white">{movie.overview}</p>
    </div>
  );
};

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id);
  return { movie };
};

export default Movie;
