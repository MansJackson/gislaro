import React, { useState } from 'react';
import {
  Paper, Tab, Tabs, Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import propTypes from 'prop-types';
import Home from './Home';
import Settings from './Settings';
import Library from './Library';

const useStyles = makeStyles({
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
});

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);
  const [notification, setNotification] = useState('');
  const classes = useStyles();

  const notify = message => {
    setNotification(message);
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.app}>
      {notification !== ''
        ? <div className={classes.notification}>{notification}</div>
        : ''}
      <nav className="nav">
        <Paper square>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
          >
            <Tab label="Home" />
            <Tab label="Library" />
            <Tab label="Settings" />
          </Tabs>
        </Paper>
      </nav>
      <main>
        <TabPanel value={value} index={0}>
          <Home notify={notify} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Library notify={notify} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Settings notify={notify} />
        </TabPanel>
      </main>
    </div>
  );
}

TabPanel.propTypes = {
  children: propTypes.shape().isRequired,
  value: propTypes.number.isRequired,
  index: propTypes.number.isRequired,
};

export default App;
