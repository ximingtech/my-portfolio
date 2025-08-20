import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Web from '@material-ui/icons/Web';
import Mobile from '@material-ui/icons/PhoneAndroid';
import Code from '@material-ui/icons/Code';
import Grid from '@material-ui/core/Grid';
import Avatar from '../components/img/giphy.gif';
import { Fade, Zoom } from 'react-reveal';

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
    },
    userIcon: {
        backgroundImage: `url(${Avatar})`,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        borderRadius: '50%',
        width:'140px',
        height:'140px',
        zIndex: 1,
        margin:'auto',
    },
}));

export default function About(){
    const classes = useStyles();

    return (
        <section>
        <div className={classes.root}>

            <Grid container className={classes.testLayout}>
                <Grid item xs={12}>
                    <Typography variant='h3'>{'{About}'}.</Typography>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Zoom><div className={classes.userIcon} /></Zoom>
                        <Fade left>
                        <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.textAround}>
                            Tan Xi Ming
                        </Typography>
                        </Fade>
                        <Fade right>
                        <Typography color="inherit" align="center" variant="subtitle1" marked="center" className={classes.textAround}>
                        <Web/> Web | <Mobile/> Mobile | <Code/> Fullstack Developer
                        </Typography>
                        </Fade>
                        <Fade left>
                        <Typography align="center" variant="body1"  marked="center" className={classes.textAround}>
                            Hi, I am XMTech, and you can call me Xi Ming. I am a Full Stack Developer with total 7 years of experience. 
                                        In my current job at Siemens Digital Industries Software Company, my job title is Full Stack Developer and I had developed various of project to help the company 
                                        grow their business over the years. Now I am eager to meet the challenge of developing new territories.
                        </Typography>
                        </Fade>
                    </div>
                </Grid>
            </Grid>
        </div>
        </section>
    )
}