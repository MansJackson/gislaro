import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import {
  MenuItem, Select, FormControl, TextField, Button, Grid, Typography,
} from '@material-ui/core';
import Folder from './Folder';
import useStyles from './styles';

export default function Settings({ notify }) {
  const [folders, setFolders] = useState();
  const [formData, setFormData] = useState();
  const [genres, setGenres] = useState(['']);
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const classes = useStyles();

  function getGenres() {
    fetch('/api/genres')
      .then(res => res.json())
      .then(res => {
        setGenres(Object.keys(res));
        setSelectedGenre(Object.keys(res)[0]);
        setFormData({ ...formData, genre: Object.keys(res)[0] });
      });
  }

  function getFolders() {
    fetch('/api/folders')
      .then(data => data.json())
      .then(response => { setFolders(response); })
      .catch(err => { notify(err.message); });
  }

  useEffect(() => {
    getFolders();
    getGenres();
    // eslint-disable-next-line
  }, []);

  function handleChange(e) {
    if (e.target.name === 'genre') setSelectedGenre(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/folders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(res => {
        notify(res);
        getFolders();
      })
      .catch(err => { notify(err.message); });
  }

  function deleteFolder(id) {
    fetch(`/api/folders/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(res => {
        notify(res);
        getFolders();
      })
      .catch(err => { notify(err.message); });
  }

  function sortAlbums() {
    fetch('/api/albums/sort')
      .then(res => res.json())
      .then(message => { notify(message); getFolders(); })
      .catch(err => { notify(err.message); });
  }

  return (
    <Grid container justify="center">
      <Grid container justify="center">
        <Typography variant="h5" component="h5">
          Folders
        </Typography>
      </Grid>
      <FormControl>
        <Grid
          container
          direction="row"
          justify="center"
        >
          <TextField className={classes.form_element} name="name" onChange={handleChange} label="Name" variant="outlined" />
          <TextField className={classes.form_element} name="maxSize" onChange={handleChange} label="Maximum Size" variant="outlined" />
          <Select
            variant="outlined"
            className={classes.form_element}
            value={selectedGenre}
            onChange={handleChange}
            name="genre"
          >
            {genres.map(el => <MenuItem value={el} key={uuidv4()}>{el}</MenuItem>)}
          </Select>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
        >
          <Button className={classes.form_element} onClick={handleSubmit} variant="contained" color="primary">Add</Button>
          <Button className={classes.form_element} onClick={sortAlbums} variant="contained" color="primary">Sort Records</Button>
        </Grid>
      </FormControl>
      <Grid container justify="center">
        {folders
          ? folders.map(folder => (
            <Grid key={uuidv4()} item xs={12} sm={6} md={4}>
              <Folder data={folder} callback={deleteFolder} />
            </Grid>
          ))
          : ''}
      </Grid>
    </Grid>
  );
}

Settings.propTypes = {
  notify: propTypes.func.isRequired,
};
