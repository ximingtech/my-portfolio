import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Home, ContactPhone, BusinessCenter} from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  spaceBetween: {
    //marginRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-around',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor:'black'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            XmTech
          </Typography>
          <Home style={{marginRight:'15px'}} />
          <BusinessCenter style={{marginRight:'15px'}} />
          <ContactPhone style={{marginRight:'15px'}} />
        </Toolbar>
      </AppBar>
    </div>
  );
}