import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MIcon from '../components/MIcon';
import Link from '@material-ui/core/Link';
import ProgressBar from '../components/ProgressBar';
import Web from '@material-ui/icons/Web';
import Mobile from '@material-ui/icons/PhoneAndroid';
import Code from '@material-ui/icons/Code';
import Grid from '@material-ui/core/Grid';
import Avatar from '../components/img/giphy.gif';

const useStyles = makeStyles((theme) => ({
    root: {
        position:'relative',
        // height: '100vh',
        // backgroundColor: 'black',
        color: 'white'
    },
    customCard:{
        marginTop:'3%',
    },
    container: {
        display:'flex',
        flex: 1,
        justifyContent:'center',
        marginBottom:'4%'
    },
    textAround: {
        margin:'4%',
    },
    progressRoot:{
        width: '100%',
        marginTop: '0.5%'
    },
    skillDisplay:{
        display: 'flex',
        flexDirection: 'column',
        minWidth:'50%',
        marginRight:'0.5%',
        marginLeft:'0.5%'
    },
    displaySet:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '2%',
        marginBottom: '2%',
    },
    testLayout:{
        backgroundColor: 'black',
        // border: 0,
        // color: 'white',
        // padding: '0 30px',
        // boxShadow: '0px 0px 15px 8px rgba(0, 0, 0, .8)',
    },
    userIcon: {
        //backgroundImage: `url("https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")`,
        backgroundImage: `url(${Avatar})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        borderRadius: '50%',
        width:'140px',
        height:'140px',
        zIndex: 1,
        //position:'absolute',
        margin:'auto',
        //left: '50%',
        //transform: 'translate(-50%, -50%)'
    },
}));

export default function About(){
    const classes = useStyles();

    return (
        <section>
        <div className={classes.root}>
            <Grid container className={classes.testLayout}>
                <Grid item xs={12}>
                    <Typography variant='h3'>{'{About Me?}'}2.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <div className={classes.userIcon} />
                        <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.textAround}>
                                Tan Xi Ming
                        </Typography>
                        <Typography color="inherit" align="center" variant="subtitle1" marked="center" className={classes.textAround}>
                            <Web/> Web | <Mobile/> Mobile | <Code/> Fullstack Developer
                        </Typography>
                        <Typography align="center" variant="body1"  marked="center" className={classes.textAround}>
                            Hi, I am XMTech, and you can call me Xi Ming. I am a Full Stack Developer with 3 years of experience. 
                                        In my current job at Xend company, I had developed various of project to help the company 
                                        grow their business and on-time rate over the two years. Now I am very eager to meet the challenge of developing new territories.
                        </Typography>
                        <div className={classes.container}>
                            <Link href="https://www.linkedin.com/in/xi-ming-tan-3bb9321a4/" target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-linkedin-square" iconStyle={{fontSize:35, marginRight:20, color:'white'}} />
                            </Link>
                            <Link href="https://www.facebook.com/bright.ix.7/"  target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-facebook-square" iconStyle={{fontSize:35, marginRight:20, color:'white'}} />
                            </Link>
                            <Link href="https://www.instagram.com/ming_txm/?hl=en"  target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-instagram" iconStyle={{fontSize:35, marginRight:20, color:'white'}} />
                            </Link>
                            <Link href="https://github.com/ximingtech"  target="_blank" rel="noreferrer">
                            <MIcon name="fa fa-github" iconStyle={{fontSize:35, color:'white'}} />
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        </section>
    )
}