import React from 'react';
import propTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

export default function Folder({
  data: {
    maxSize, records, name, genre, id,
  }, callback,
}) {
  return (

    <Paper style={{
      padding: '1rem',
      margin: '1rem',
      textAlign: 'center',
      position: 'relative',
    }}
    >
      <Typography variant="h3">
        {name}
      </Typography>
      <Typography variant="body1">
        {records.length}
        /
        {maxSize}
      </Typography>
      <Typography variant="body2">
        {genre}
      </Typography>
      <DeleteOutlineOutlinedIcon
        style={{
          position: 'absolute',
          top: '.5rem',
          right: '.5rem',
          cursor: 'pointer',
        }}
        color="secondary"
        fontSize="large"
        onClick={() => callback(id)}
      />
    </Paper>
  );
}

Folder.propTypes = {
  data: propTypes.shape({
    maxSize: propTypes.string.isRequired,
    records: propTypes.arrayOf(propTypes.number).isRequired,
    name: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired,
  callback: propTypes.func.isRequired,
};
