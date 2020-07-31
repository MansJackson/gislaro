import React, { useEffect } from 'react';
import { Chip } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';

export default function Filters({
  selected, setSelected, genres, setGenres,
}) {
  function getGenres() {
    fetch('/api/genres')
      .then(res => res.json())
      .then(res => {
        setGenres(Object.keys(res));
      });
  }

  useEffect(() => {
    getGenres();
    // eslint-disable-next-line
  }, []);

  function genreSelected(genre) {
    return selected.includes(genre);
  }

  function toggleSelected(e) {
    const genre = e.target.classList.contains('genre_filter')
      ? e.target.getAttribute('name')
      : e.target.parentNode.getAttribute('name');
    if (genreSelected(genre)) setSelected(selected.filter(el => el !== genre));
    else setSelected([...selected, genre]);
  }

  return (
    <div className="filters">
      {genres
        ? genres.map(genre => (
          genreSelected(genre)
            ? (
              <Chip
                className="genre_filter"
                key={uuidv4()}
                label={genre}
                clickable
                onClick={toggleSelected}
                name={genre}
              />
            )
            : (
              <Chip
                className="genre_filter"
                color="primary"
                key={uuidv4()}
                label={genre}
                clickable
                onClick={toggleSelected}
                name={genre}
              />
            )
        ))
        : null}
    </div>
  );
}

Filters.propTypes = {
  selected: propTypes.arrayOf(propTypes.string),
  setSelected: propTypes.func.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
  setGenres: propTypes.func.isRequired,
};

Filters.defaultProps = {
  selected: [],
  genres: null,
};
