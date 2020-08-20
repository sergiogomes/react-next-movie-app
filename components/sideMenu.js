import { useRouter } from "next/router";
import Modal from "./modal";
import MovieCreateForm from "./movieCreateForm";
import { environment, createMovie } from "../actions/index";

const SideMenu = (props) => {
  const { categories } = props;
  const router = useRouter();
  let modal = null;

  const handleCreateMovie = (movie) => {
    createMovie(movie).then(() => {
      modal.closeModal();
      router.push("/");
    });
  };

  return (
    <div>
      <Modal
        ref={(ele) => (modal = ele)}
        hasSubmit={false}
        environment={environment}
      >
        <MovieCreateForm handleFormSubmit={handleCreateMovie} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((c) => (
          <a
            key={c.id}
            onClick={() => props.changeCategory(c)}
            href="#"
            className={`list-group-item ${
              props.activeCategory === c.id ? "active" : ""
            }`}
          >
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
