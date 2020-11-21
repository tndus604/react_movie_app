import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({year, title, summary, poster, url, genres}) {
    return(
    <div className="movie container">
        <img src={poster} alt={title} title={title}/>
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">{genres.map((genre, index) => <li key={index}>{genre}</li>)}</ul>
        <p className="movie_class">{summary}</p>
        <a href={url}><button className="movie_button">Download</button></a>
    </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;