import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import School from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    testLayout:{
        backgroundColor: 'white',
        marginBottom: '2%'
    },
    nameStyle:{
        background: 'linear-gradient(45deg, #807a7a 1%, #4d4949 45%, #000000 100%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0px 3px 5px 5px rgba(0, 0, 0, .3)',
    },
}));

export default function Education() {
    const classes = useStyles();

    return (
        <section>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h3'>{'{Education?}'}5.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} style={{margin:'3%'}}>
                                <Typography align="center"><School fontSize="large"  /></Typography>
                                <Typography variant='subtitle1' align="center"><strong>University Tunku Abdul Rahman</strong> — <span className={classes.nameStyle}>Degree</span></Typography>
                                <Typography align="center">JULY 2014 - August 2018</Typography>
                                <Typography align="center">Bachelor of Information System Engineering (Hons) Information System Engineering</Typography>
                                <Typography align="center">Graduation Date: August, 2018</Typography>
                                <Typography align="center">CGPA: 2.5226</Typography>
                            </Grid>
                            <Grid item xs={12} style={{margin:'3%'}}>
                                <Typography align="center"><School fontSize="large" /></Typography>
                                <Typography variant='subtitle1' align="center"><strong>Tunku Abdul Rahman University College</strong> — <span className={classes.nameStyle}>Diploma</span></Typography>
                                <Typography align="center">May 2010 - June 2014</Typography>
                                <Typography align="center">Diploma in Science (Information System Engineering)</Typography>
                                <Typography align="center">Graduation Date: June, 2014</Typography>
                                <Typography align="center">CGPA: 2.7905</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </section>
    )
}