import React, {useEffect, useState} from 'react'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LunchMenu from './components/LunchMenu'
import NavBar from './components/NavBar'

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <RestaurantIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ruokalista
        </Typography>
        <LunchMenu menu={menu} />
      </div>
      <div className={classes.nav}>
        <NavBar />
      </div>
    </Container>
  );
}
