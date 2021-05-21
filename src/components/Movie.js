import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

const Movie = ({ id, year, title, summary, poster, genres }) => {
  const summaryText =
    summary.length > 300 ? `${summary.substring(0, 300)}...` : summary;

  return (
    <Link
      to={{
        pathname: `movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <div className="movie__year">{year}</div>
          <ul className="movie__genres">
            {genres.map((elem, index) => (
              <li key={index} className="genres__genres">
                {elem}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summaryText}</p>
        </div>
      </div>
    </Link>
  );
};

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
