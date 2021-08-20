import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Menu from './components/Menu';
import NavBar from './components/NavBar';
import Daycare from './components/Daycare';
import Calendar from './components/Calendar';
import Login from './components/Login';
import MainPage  from './components/MainPage';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-around',
    marginBottom: 0
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [ menu, setMenu ] = useState([])
  
  useEffect(()=>{
    try {
      fetch("/.netlify/functions/node-fetch", { headers: { accept: "Accept: application/json" } })
      .then((x) => x.json())
      .then((data) => setMenu(data))
    } catch(error) {
      console.error(error)
    }
  },[setMenu])


  return (
    <Router>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Switch>
            <Route path='/kirjaudu'>
              <Login />
            </Route>
            <Route exact path='/'>
              <MainPage />
            </Route>
            <Route path='/kalenteri'>
              <Calendar />
            </Route>
            <Route path='/ruoka'>
              <Menu menu={menu} />
            </Route>
            <Route path='/vuorot'>
              <Daycare />
            </Route>
          </Switch>
      </div>
      <div className={classes.nav}>
        <NavBar />
      </div>
    </Container>
    </Router>
  );
}
