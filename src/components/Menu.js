import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import LunchMenu from './LunchMenu'

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

const Menu = (props) => {
  const {menu} = props
  const classes = useStyles();
  return (
    <>
      <Avatar className={classes.avatar}>
        <RestaurantIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Ruokalista
      </Typography>
      <LunchMenu menu={menu} />
    </>
  )
}

export default Menu
