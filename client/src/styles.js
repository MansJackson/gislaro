import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form_control: {
    display: 'flex',
    justifyContent: 'center',
  },
  form_element: {
    margin: '.5rem',
  },
  switch: {
    display: 'flex',
    justifyContent: 'center',
  },
  app: {
    backgroundColor: 'whitesmoke',
    minHeight: '100vh',
  },
  notification: {
    position: 'fixed',
    padding: '1rem',
    bottom: '1rem',
    right: '1rem',
    backgroundColor: 'blanchedalmond',
    borderRadius: '.2rem',
    zIndex: '1',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '.5rem',
    flexDirection: 'column',
    padding: 0,
    [theme.breakpoints.up('sm')]: {
      padding: '1rem',
    },
  },
  card__image: {
    width: 330,
    height: 330,
  }
}));

export default useStyles;
