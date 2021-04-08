import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '../components/Appbar';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        backgroundColor: 'white'
    },
    title: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`
    },
    nameStyle:{
        background: 'linear-gradient(45deg, #696969 1%, #240001 45%, #000000 100%)',
        borderRadius: 25,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0px 3px 5px 5px rgba(0, 0, 0, .3)',
      },
}));

const theme = createMuiTheme({
    typography: {
      h2: {
        fontFamily:'Courier New',
      },
      caption: {
        fontFamily:'Courier New',    
      },
      subtitle1: {
        fontFamily:'Courier New',
        fontStyle: 'Bold' 
      },
      body1 :{
        fontFamily:'Courier New',
      }
    },
});

export default function Home () {
    const classes = useStyles();

    return (
        <section id='home'>
            <div className={classes.root}>
                <AppBar />
                <div className={classes.title}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2">
                            <strong> {"{Hello World?}"};</strong> 
                        </Typography>
                        <Typography variant="subtitle1">
                            I Am <span className={classes.nameStyle}>{"{XMTech}"}</span>, Nice to meet you 👋. <strong>Full Stack Developer</strong> with 3 years of experience.
                        </Typography>
                        <Typography variant="caption">
                            {'<p hidden> more on'} <strong>Backend</strong> {'actually 😂😆 </p>'} 
                        </Typography>
                    </ThemeProvider>
                </div>
            </div>
        </section>
    )
}