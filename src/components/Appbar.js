import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Home, ContactPhone, BusinessCenter, Person} from '@material-ui/icons'
import LinkMUI from '@material-ui/core/Link';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
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
    color: 'black',
    fontFamily: 'Courier New'
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },    
  appbar:{
      background:"none",
      transition:".5s",
      position:"absolute"
  },
  appbarScroll:{
      background:"white",
      transition:".5s"
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 100
  });

  return (
    <div className={classes.root}>
      <AppBar className={`${trigger === true ? classes.appbar : classes.appbarScroll}`} elevation={0} position="fixed" color='transparent'>
        <Toolbar>
          <LinkMUI
            href="#home"
          >
            <Typography variant="h2" className={classes.title} style={{color: 'black'}}>
              {'.XMT'}
            </Typography>
          </LinkMUI>
          <div className={classes.right}>
            <LinkMUI
              href="#home"
            >
              <Home style={{marginRight:'15px', color: 'black'}} />
            </LinkMUI>
            <LinkMUI
              href="#about"
            >
              <Person style={{marginRight:'15px', color: 'black'}} />
            </LinkMUI>
            <LinkMUI
              href="#resume"
            >
              <BusinessCenter style={{marginRight:'15px', color: 'black'}} />
            </LinkMUI>
            <LinkMUI
              href="#contact"
            >
              <ContactPhone style={{marginRight:'15px', color: 'black'}} /> 
            </LinkMUI>  
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}