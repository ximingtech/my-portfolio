import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProgressBar from '../components/ProgressBar';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Roll from 'react-reveal/Roll';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        //height: '100vh',
        //backgroundColor: 'red'
    },
    progressRoot:{
        width: '100%',
        marginTop: '0.5%',
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
        alignItems: 'center',
        marginTop: '2%',
        marginBottom: '2%',
    },
    nameStyle:{
        background: 'linear-gradient(45deg, #696969 1%, #240001 45%, #000000 100%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0px 3px 5px 5px rgba(0, 0, 0, .3)',
    },
    testLayout:{
        backgroundColor: 'black',
        color:'white',
        paddingBottom:'4%',
    }
}));

export default function Skill() {
    const classes = useStyles();

    return(
        <section>
            <div className={classes.root}>
                <Grid container className={classes.testLayout} >
                    <Grid item xs={12} > 
                    <Box p={1}>
                        <Typography variant='h3' align="center">{'{Skill}'}.</Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'2%'}}>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Programming Language</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={50} label={'Java'}></ProgressBar>
                                            <ProgressBar value={80} label={'JavaScript'}></ProgressBar>
                                            <ProgressBar value={80} label={'C#'}></ProgressBar>
                                            <ProgressBar value={90} label={'VB.Net'}></ProgressBar>
                                            <ProgressBar value={85} label={'SQL'}></ProgressBar>
                                            <ProgressBar value={70} label={'CSS3'}></ProgressBar>
                                            <ProgressBar value={70} label={'HTML5'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Database</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'MySQL'}></ProgressBar>
                                            <ProgressBar value={70} label={'MSSQL'}></ProgressBar>
                                            <ProgressBar value={40} label={'Oracle'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Framework & Libraries</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'JQuery '}></ProgressBar>
                                            <ProgressBar value={80} label={'.Net'}></ProgressBar>
                                            <ProgressBar value={80} label={'React.js'}></ProgressBar>
                                            <ProgressBar value={60} label={'Next.js'}></ProgressBar>
                                            <ProgressBar value={70} label={'Express.js'}></ProgressBar>
                                            <ProgressBar value={70} label={'Node.js'}></ProgressBar>
                                            <ProgressBar value={90} label={'Bootstrap'}></ProgressBar>
                                            <ProgressBar value={80} label={'Material UI'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>OS Platform</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={90} label={'Windows'}></ProgressBar>
                                            <ProgressBar value={80} label={'MacOS'}></ProgressBar>
                                            <ProgressBar value={80} label={'Android'}></ProgressBar>
                                            <ProgressBar value={85} label={'IOS'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>  
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'2%'}}>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>IDE</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'VS Code'}></ProgressBar>
                                            <ProgressBar value={85} label={'VS 2019'}></ProgressBar>
                                            <ProgressBar value={70} label={'Android Studio'}></ProgressBar>
                                          
                     
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Interested</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'.Net Core'}></ProgressBar>
                                            <ProgressBar value={90} label={'Flutter'}></ProgressBar>
                                            <ProgressBar value={90} label={'Go'}></ProgressBar>                             
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Other Fields</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'Singing'}></ProgressBar>
                                                             
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <Roll>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Language I Speak</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={99} label={'Mandarin'}></ProgressBar>
                                            <ProgressBar value={60} label={'English'}></ProgressBar>
                                            <ProgressBar value={50} label={'Bahasa Malayu'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                                </Roll>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    )

}