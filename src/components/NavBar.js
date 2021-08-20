import React from 'react';
import { useHistory } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import TodayIcon from '@material-ui/icons/Today';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';

const LabelBottomNavigation = () => {
  let history = useHistory()
  const [value, setValue] = React.useState(history.location.pathname==='/' ? 'koti' : history.location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(`/${newValue!=="koti" ? newValue : ''}`)
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Koti" value="koti" icon={<HomeIcon />} />
      <BottomNavigationAction label="Kalenteri" value="kalenteri" icon={<CalendarViewDayIcon />} />
      <BottomNavigationAction label="Vuorot" value="vuorot" icon={<TodayIcon />} />
      <BottomNavigationAction label="Ruoka" value="ruoka" icon={<RestaurantMenuIcon />} />
    </BottomNavigation>
  );
}

export default LabelBottomNavigation