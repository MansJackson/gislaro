import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import propTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function LibPagination({ count, page, setPage }) {
  const classes = useStyles();
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={count} page={page} onChange={handleChange} size="small" />
    </div>
  );
}

LibPagination.propTypes = {
  count: propTypes.number.isRequired,
  page: propTypes.number.isRequired,
  setPage: propTypes.func.isRequired,
};
