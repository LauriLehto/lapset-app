import React from 'react';
import { useHistory } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import TodayIcon from '@material-ui/icons/Today';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

const LabelBottomNavigation = () => {
  const [value, setValue] = React.useState('ruoka');
  let history = useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)

    history.push(`/${newValue!=="koti" ? newValue : ''}`)

  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Koti" value="koti" icon={<HomeIcon />} />
      <BottomNavigationAction label="Kalenteri" value="kalenteri" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Vuorot" value="vuorot" icon={<TodayIcon />} />
      <BottomNavigationAction label="Ruoka" value="ruoka" icon={<RestaurantMenuIcon />} />
    </BottomNavigation>
  );
}

export default LabelBottomNavigation