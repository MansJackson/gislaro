import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import propTypes from 'prop-types';
import {
  Select, MenuItem, Card, Typography, Button, CardMedia, CardContent,
} from '@material-ui/core';
import useStyles from './styles';

export default function AlbumCard({ album, callback }) {
  const [selectedGenre, setSelectedGenre] = useState(album.genre[0]);
  const classes = useStyles();

  const {
    title, genre, cover_image, year,
  } = album;
  const artist = title.split(' - ')[0];
  const albumName = title.split(' - ')[1];

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.card__image}
        image={cover_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {albumName}
          {' '}
          -
          {year}
        </Typography>
        <Typography variant="body2" component="p">
          {artist}
        </Typography>
        <Select
          variant="outlined"
          id="demo-simple-select-filled"
          value={selectedGenre}
          onChange={e => setSelectedGenre(e.target.value)}
          style={{ marginTop: '1rem' }}
        >
          {genre.map(el => <MenuItem value={el} key={uuidv4()}>{el}</MenuItem>)}
        </Select>
      </CardContent>
      <Button size="medium" color="primary" onClick={() => callback({ ...album, genre: selectedGenre })}>
        Add
      </Button>
    </Card>
  );
}

AlbumCard.propTypes = {
  callback: propTypes.func.isRequired,
  album: propTypes.shape({
    title: propTypes.string,
    genre: propTypes.arrayOf(propTypes.string),
    cover_image: propTypes.string,
    year: propTypes.string,
  }).isRequired,
};
