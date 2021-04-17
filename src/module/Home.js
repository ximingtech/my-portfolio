import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MIcon from '../components/MIcon';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { init } from "ityped";

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '90vh',
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
    container: {
      display:'flex',
      flex: 1,
      justifyContent:'center',
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
      },
      h6:{
        fontFamily:'Courier New',
        fontStyle: 'Bold',     
      },
      h3: {
        fontFamily:'Courier New',
      },
    },
});

export default function Home () {
    const classes = useStyles();

    useEffect(() => {
      const myElement = document.querySelector("#myElement");
      init(myElement, {
        showCursor: false,
        strings: ["Hello?", "Hello World?", "Hello Everyone?"]
      });
    });

    return (
        <section id='home'>
            <div className={classes.root}>
                {/* <AppBar /> */}
                <div className={classes.title}>
                    <ThemeProvider theme={theme}>
                        <Typography variant="h2">
                            <strong> {"{"}<span id="myElement"></span>{"}"}</strong> 
                        </Typography>
                        <Typography variant="subtitle1">
                            {"<p>"} I Am <span className={classes.nameStyle}>{"{XMTech}"}</span>, Nice to meet you 👋. <strong>Full Stack Developer</strong> with 3 years of experience.{"</p>"}
                        </Typography>
                        <Typography variant="caption">
                            {'<p hidden> more on'} <strong>Backend</strong> {'actually 😂😆 </p>'} 
                            <Box p={1}>
                            <Link href="https://www.linkedin.com/in/xi-ming-tan-3bb9321a4/" target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-linkedin-square" iconStyle={{fontSize:35, marginRight:20, color:'black'}} />
                            </Link>
                            <Link href="https://www.facebook.com/bright.ix.7/"  target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-facebook-square" iconStyle={{fontSize:35, marginRight:20, color:'black'}} />
                            </Link>
                            <Link href="https://www.instagram.com/ming_txm/?hl=en"  target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-instagram" iconStyle={{fontSize:35, marginRight:20, color:'black'}} />
                            </Link>
                            <Link href="https://github.com/ximingtech"  target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-github" iconStyle={{fontSize:35, color:'black'}} />
                            </Link>
                            </Box>
                        </Typography>
                    </ThemeProvider>
                </div>
            </div>
        </section>
    )
}