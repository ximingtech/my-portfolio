import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ProgressBar from '../components/ProgressBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        backgroundColor: 'white'
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
}));

export default function Skill() {
    const classes = useStyles();

    return(
        <section>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}> 
                        <Typography variant='h2'><strong>{'{Tech Stack?}'}3.</strong></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'2%'}}>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Programming Language</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={50} label={'Node.js'}></ProgressBar>
                                            <ProgressBar value={70} label={'React.js'}></ProgressBar>
                                            <ProgressBar value={90} label={'MySQL'}></ProgressBar>
                                            <ProgressBar value={70} label={'Express.js'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Database</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'JavaScript'}></ProgressBar>
                                            <ProgressBar value={60} label={'C#'}></ProgressBar>
                                            <ProgressBar value={90} label={'VBA'}></ProgressBar>
 
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Framework & Libraries</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'JavaScript'}></ProgressBar>
                                            <ProgressBar value={60} label={'C#'}></ProgressBar>
                                            <ProgressBar value={90} label={'VBA'}></ProgressBar>
                                            <ProgressBar value={50} label={'Node.js'}></ProgressBar>
                                            <ProgressBar value={70} label={'React.js'}></ProgressBar>
                                            <ProgressBar value={90} label={'MySQL'}></ProgressBar>
                                            <ProgressBar value={70} label={'Express.js'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>OS Platform</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'Windows'}></ProgressBar>
                                            <ProgressBar value={60} label={'MacOS'}></ProgressBar>
                                            <ProgressBar value={60} label={'Android'}></ProgressBar>
                                            <ProgressBar value={60} label={'IOS'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </Grid>  
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container style={{marginTop:'2%'}}>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>IDE</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'JavaScript'}></ProgressBar>
                                            <ProgressBar value={60} label={'C#'}></ProgressBar>
                                            <ProgressBar value={90} label={'VBA'}></ProgressBar>
                                            <ProgressBar value={50} label={'Node.js'}></ProgressBar>
                     
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Interested</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'JavaScript'}></ProgressBar>
                                            <ProgressBar value={60} label={'C#'}></ProgressBar>
                                            <ProgressBar value={90} label={'VBA'}></ProgressBar>
                                            <ProgressBar value={50} label={'Node.js'}></ProgressBar>
                                            <ProgressBar value={70} label={'React.js'}></ProgressBar>
                                            <ProgressBar value={90} label={'MySQL'}></ProgressBar>
                                            <ProgressBar value={70} label={'Express.js'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} lg={3}>
                                <div className={classes.displaySet}>
                                    <div className={classes.skillDisplay}>
                                        <Typography variant="caption">
                                            <span className={classes.nameStyle}>Language I Speak</span>
                                        </Typography>
                                        <div className={classes.progressRoot}>
                                            <ProgressBar value={80} label={'Mandarin'}></ProgressBar>
                                            <ProgressBar value={60} label={'English'}></ProgressBar>
                                            <ProgressBar value={90} label={'Bahasa Malayu'}></ProgressBar>
                                        </div>
                                    </div>
                                </div>
                            </Grid> 
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    )

}