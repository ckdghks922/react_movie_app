import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ isLoading: false, movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">API Loading...</span>
          </div>
        ) : (
          <>
            <h1 className="title">Movie List</h1>
            <div className="movies">
              {movies.map((elem) => (
                <Movie
                  key={elem.id}
                  year={elem.year}
                  title={elem.title}
                  summary={elem.summary}
                  poster={elem.medium_cover_image}
                  genres={elem.genres}
                />
              ))}
            </div>
          </>
        )}
      </section>
    );
  }
}

export default Home;
