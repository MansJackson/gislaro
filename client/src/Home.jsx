import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  TextField, FormControl, Grid, Button, Switch, FormControlLabel,
} from '@material-ui/core';
import propTypes from 'prop-types';
import Loading from './Loading';
import AlbumCard from './Card';
import useStyles from './styles';
import LibPagination from './LibPagination';

export default function Home({ notify }) {
  const [input, setInput] = useState('');
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [searchBarcode, setSearchBarcode] = useState(false);
  const [searchMasters, setSearchMasters] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState();
  const classes = useStyles();

  function addToLibrary(result) {
    const {
      id, genre, title, cover_image, year, master_url,
    } = result;
    const album = {
      id, title, genre, cover_image, year, master_url,
    };
    fetch('/api/albums', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(album),
    })
      .then(response => response.json())
      .then(response => { notify(response); })
      .catch(err => { notify(err.message); });
  }

  function handleSearch(e) {
    if (e) e.preventDefault();
    if (input === '') {
      notify('Search field can not be empty');
      return;
    }
    let query = `/search?page=${page}`;
    if (searchBarcode) query += '&barcode=true';
    if (searchMasters) query += '&masters=true';
    setLoading(true);
    setResults(null);
    setCount(null);
    fetch(query, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ query: input }),
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false);
        setResults(data.results);
        setCount(data.pagination.pages);
      });
  }

  useEffect(() => {
    if (count) handleSearch();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <Grid container justify="center">
        <form onSubmit={handleSearch}>
          <FormControl>
            <TextField
              className={classes.form_element}
              onChange={e => setInput(e.target.value)}
              label="Search"
              variant="outlined"
            />
            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  checked={searchBarcode}
                  onChange={() => setSearchBarcode(!searchBarcode)}
                  name="barcode"
                  color="primary"
                />
              )}
              label="Barcode"
            />
            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  checked={searchMasters}
                  onChange={() => setSearchMasters(!searchMasters)}
                  name="barcode"
                  color="primary"
                />
              )}
              label="Master"
            />
            <Button
              className={classes.form_element}
              onClick={handleSearch}
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </FormControl>
        </form>
      </Grid>
      <Grid container justify="space-evenly">
        {results
          ? results.map(el => (
            <Grid key={uuidv4()} item xs={12} sm={6} md={4}>
              <AlbumCard album={el} callback={addToLibrary} />
            </Grid>
          ))
          : ''}
        {loading && <Loading />}
      </Grid>
      <Grid container justify="center">
        {count ? <LibPagination count={count} page={page} setPage={setPage} /> : null}
      </Grid>
    </>
  );
}

Home.propTypes = {
  notify: propTypes.func.isRequired,
};
