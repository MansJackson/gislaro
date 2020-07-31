import React from 'react';
import propTypes from 'prop-types';
import {
  Typography, Button, Card, CardContent, CardMedia,
} from '@material-ui/core';

export default function LibCard({ album, callback }) {
  const {
    title, genre, cover_image, year, folder, position,
  } = album;
  const artist = title.split(' - ')[0];
  const albumName = title.split(' - ')[1];

  return (
    <Card style={{
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      margin: '.5rem',
      flexDirection: 'column',
      padding: '1rem 1rem 0 ',
    }}
    >
      <CardMedia
        style={{ width: 300, height: 300 }}
        image={cover_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h5">
          {albumName}
          {' '}
          -
          {' '}
          {year}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {artist}
          {' '}
          -
          {' '}
          {genre}
        </Typography>
        {folder ? (
          <Typography variant="h5" component="h4">
            {folder}
            {typeof position === 'number' && `/${position}`}
          </Typography>
        ) : <p>Not yet sorted</p>}
        <Button size="medium" color="primary" onClick={() => callback(album)}>
          Remove
        </Button>
      </CardContent>
    </Card>
  );
}

LibCard.propTypes = {
  callback: propTypes.func.isRequired,
  album: propTypes.shape({
    title: propTypes.string,
    genre: propTypes.string,
    cover_image: propTypes.string,
    year: propTypes.string,
    folder: propTypes.string,
    position: propTypes.number,
  }).isRequired,
};
