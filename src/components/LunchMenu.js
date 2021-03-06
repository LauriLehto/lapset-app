import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  items: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '& > *': {
      margin: theme.spacing(0.5),
      width: theme.spacing(50),
      padding: theme.spacing(1)
    },
  },
}));

function MenuItems({description}) {
  const classes = useStyles();

  let items = description.split('<br>')
  return (
    <div className={classes.items}>
      {items.map(item =>{
        console.log(item)
        return (
          <React.Fragment key={items.indexOf(item)}>
            <ListItem key={items.indexOf(item)} elevation={2}>
              {item}
            </ListItem>
          </React.Fragment>)
      })}
    </div>
  )
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs(props) {
  const classes = useStyles();
  const today = new Date()
  const [value, setValue] = React.useState(today.getDay() ? today.getDay()-1 : 6);
  const { menu, ...other} = props

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <div className={classes.root}>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs"
        >
        { menu.length && menu.map( m => {
          const dateString = m.title[0].split(' ')[1].split('.').reverse().join('-')
          const date = new Date(dateString)
          let label = m.title[0].split(' ')
          let label2 = label[1].split('.')
          label2.splice(2,1)
          label = label[0]+' '+ label2.join('.')

          return <Tab key={m.title} label={label} {...a11yProps(date.getDay())}/>
        })}
      </Tabs>
      {/* TabPanels */}
      <Paper elevation={5} style={{paddingBottom:"10px"}}>
      { menu && menu.map( m => {
        const dateString = m.title[0].split(' ')[1].split('.').reverse().join('-')
        const date = new Date(dateString)
        return(
          <TabPanel 
            key={date.getDay()} 
            value={value} 
            index={date.getDay()}
            {...other}>
              <List>
            <MenuItems description={m.description[0]} />
            </List>
          </TabPanel>
        )
      })}
      </Paper>
    </div>
  );
}