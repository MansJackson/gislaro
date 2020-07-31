import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import {
  FormControl, TextField, Grid, Typography,
} from '@material-ui/core';
import LibCard from './LibCard';
import useStyles from './styles';
import Loading from './Loading';
import Filters from './Filters';
import LibPagination from './LibPagination';

export default function Library({ notify }) {
  const [lib, setLib] = useState();
  const [filteredLib, setFilteredLib] = useState();
  const [pageResults, setPageResults] = useState();
  const [selected, setSelected] = useState([]);
  const [genres, setGenres] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const limit = 10;
  const classes = useStyles();

  function getLibrary() {
    fetch('/api/albums')
      .then(response => response.json())
      .then(data => {
        setLib(data);
        setFilteredLib(data);
        setPageResults(data.slice(limit * (page - 1), limit * (page - 1) + limit));
      })
      .catch(err => { notify(err.message); });
  }

  function filterResults() {
    if (lib) {
      const query = new RegExp(searchQuery, 'i');
      let filtered = lib.filter(el => query.test(el.title));
      selected.forEach(el => {
        filtered = filtered.filter(result => result.genre !== el);
      });
      setFilteredLib(filtered);
      setPageResults(filtered.slice(limit * (page - 1), limit * (page - 1) + limit));
    }
  }

  async function removeFromLibrary(album) {
    fetch(`/api/albums/${album.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(response => {
        notify(response);
        setFilteredLib(filteredLib.filter(el => el.id !== album.id));
        setPageResults(filteredLib.slice(limit * (page - 1), limit * (page - 1) + limit));
      })
      .catch(err => notify(err.message));
  }

  useEffect(() => {
    getLibrary();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    filterResults();
    // eslint-disable-next-line
  }, [selected, searchQuery, page]);

  useEffect(() => {
    if (filteredLib) setCount(Math.ceil(filteredLib.length / limit));
    // eslint-disable-next-line
  }, [filteredLib]);

  useEffect(() => {
    if (count && count < page) setPage(1);
    // eslint-disable-next-line
  }, [count]);

  return (
    <main>
      <Grid container justify="center">
        <FormControl className={classes.form_control}>
          <TextField className={classes.form_element} onChange={e => setSearchQuery(e.target.value)} label="Search" variant="outlined" />
        </FormControl>
      </Grid>
      <Grid container justify="center">
        <Filters
          selected={selected}
          setSelected={setSelected}
          genres={genres}
          setGenres={setGenres}
        />
      </Grid>
      {filteredLib
        ? (
          <Grid container justify="center">
            <Typography component="h6" variant="subtitle1">
              {filteredLib.length}
              {filteredLib.length > 1 ? ' hits' : ' hit'}
            </Typography>
          </Grid>
        )
        : null}
      <Grid container justify="space-evenly">
        {pageResults
          ? pageResults.map(album => (
            <Grid key={uuidv4()} item xs={12} sm={6} md={4}>
              <LibCard album={album} callback={removeFromLibrary} />
            </Grid>
          ))
          : <Loading />}
      </Grid>
      <Grid container justify="center">
        {count && filteredLib && filteredLib.length !== 0
          ? <LibPagination count={count} page={page} setPage={setPage} />
          : null}
      </Grid>
    </main>
  );
}

Library.propTypes = {
  notify: propTypes.func.isRequired,
};
