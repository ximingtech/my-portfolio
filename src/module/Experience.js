import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import School from '@material-ui/icons/School';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PrintIcon from '@material-ui/icons/Print';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import LogisticIcon from '@material-ui/icons/LocalShipping';
import Paper from '@material-ui/core/Paper';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        //height: '100vh',
        //backgroundColor: 'black'
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    testLayout:{
        backgroundColor: 'white',
        
        //borderRadius: '5%',
        //borderRadius: 50,
        // border: 0,
        // color: 'white',
        // padding: '0 30px',
        // boxShadow: '0px 0px 15px 8px rgba(0, 0, 0, .8)',
    },
    buttonPosition:{
        display: 'flex', 
        // //flexDirection: 'column', 
        // justifyContent: 'center',
        flex: 0.1
    }
}));

export default function Experience() {
    const classes = useStyles();

    return (
        <section>
            <div className={classes.root}>
                <Grid container className={classes.testLayout}>
                    <Grid item xs={12}>
                        <Typography variant='h3' >{'{Resume?}'}3.</Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} style={{marginTop:'2%', marginBottom:'4%'}} >
                    <Typography align='center'><strong>Experience</strong></Typography>
                        <Timeline align="left">
                            <TimelineItem>
                                <TimelineOppositeContent style={{flex:0.1}}>
                                    {/* <Typography variant="caption" color="textSecondary" >
                                        Feb 2021 to Present
                                    </Typography> */}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <LaptopMacIcon/>
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="subtitle1" component="h1">
                                    <strong>Paramit Malaysia SDN BHD</strong> <Typography variant='caption'> - Software Engineer </Typography>
                                    </Typography>
                                    <Typography variant='caption'>
                                    Feb 2021 - Present
                                    </Typography>
                                </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                            <TimelineOppositeContent style={{flex:0.1}}>
                                {/* <Typography variant="caption" color="textSecondary">
                                    May 2018 to Feb 2021
                                </Typography> */}
                            </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <LogisticIcon />
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="subtitle1" component="h1">
                                    <strong>XEND SDN BHD</strong> <Typography variant='caption'> - Full Stack Developer</Typography>
                                    </Typography>
                                    <Typography variant='caption'>
                                        May 2018 - Feb 2021
                                    </Typography>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" component="h1"><strong>Frontend Development</strong></Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='caption'>• Create, Innovate, and enhance from existing admin dashboard websites.</Typography> <br/>
                                            <Typography variant='caption'>• Optimization for web and code performance.</Typography> <br/>
                                            <Typography variant='caption'>• Support and maintain admin dashboard website.</Typography> <br/>
                                            <Typography variant='caption'>• Provide technical solutions to help operations teams.</Typography> <br/>
                                            <Typography variant='caption'>• Consignment note printing application, to connect a printer with desktop application to search consignment and print consignment label sticker.</Typography> <br/>
                                            <Typography variant='caption'>• Parcel check in application, to replace paper works during production.</Typography> <br/>
                                            <Typography variant='caption'>• Invoice generator application, generate invoice for monthly transaction closing to serve external and internal customers.</Typography>

                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1" component="h1"><strong>Backend Development</strong></Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant='caption'>• Provide Web service and WCF for frontend developers to integrate.</Typography> <br/>
                                            <Typography variant='caption'>• Deployment web application, Web service and WCF project.</Typography> <br/>
                                            <Typography variant='caption'>• Provide WCF for third party logistics company.</Typography> <br/>
                                            <Typography variant='caption'>• Integrated third party logistics API.</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent style={{flex:0.1}}>
                                    {/* <Typography variant="caption" color="textSecondary" >
                                        Sep 2017 to Dec 2017
                                    </Typography> */}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <PrintIcon />
                                </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="subtitle1" component="h1">
                                        <strong>Thunder Print SDN BHD</strong> <Typography variant='caption'> - Internship</Typography>
                                    </Typography>
                                    <Typography variant='caption'>
                                    Sep 2017 - Dec 2017
                                    </Typography> <br/>
                                    <Typography variant='caption'> • Assist senior developer to develop android mobile applications.</Typography> <br/>
                                    <Typography variant='caption'> • Learned how to call and retrieve data from backend to frontend in android mobile development.</Typography> <br/>
                                    <Typography variant='caption'> • Learned Web service development.</Typography> <br/>
                                    <Typography variant='caption'> • Build In app chat module in mobile application</Typography>

                                </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                    <Grid item xs={12} lg={6} style={{marginTop:'2%', marginBottom:'4%'}} >
                        <Typography align='center' variant='subtitle1'><strong>Education</strong></Typography>
                        <Timeline align="left">
                            <TimelineItem>
                                <TimelineOppositeContent style={{flex:0.1}}>
                                    {/* <Typography variant="caption" color="textSecondary" >
                                        Feb 2021 to Present
                                    </Typography> */}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot color="secondary">
                                    <School/>
                                </TimelineDot>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="subtitle1" component="h1">
                                        <strong>University Tunku Abdul Rahman</strong> <Typography variant='caption'> - Degree </Typography>
                                    </Typography>
                                    <Typography variant='caption'>
                                    JULY 2014 - August 2018
                                    </Typography><br/>
                                    <Typography variant='caption'>
                                    Bachelor of Information System Engineering (Hons) Information System Engineering
                                    </Typography><br/>
                                    <Typography variant='caption'>
                                    Graduation Date: August, 2018
                                    </Typography><br/>
                                    <Typography variant='caption'>
                                    CGPA: 2.5226
                                    </Typography>
                                </Paper>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineOppositeContent style={{flex:0.1}}>
                                    {/* <Typography variant="caption" color="textSecondary" >
                                        Sep 2017 to Dec 2017
                                    </Typography> */}
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                <TimelineDot color="primary">
                                    <School />
                                </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="subtitle1" component="h1">
                                        <strong>Tunku Abdul Rahman University College</strong> <Typography variant='caption'> - Diploma</Typography>
                                    </Typography>
                                    <Typography variant='caption'> 
                                    May 2010 - June 2014
                                    </Typography> <br/>
                                    <Typography variant='caption'> 
                                    Diploma in Science (Information System Engineering)
                                    </Typography> <br/>
                                    <Typography variant='caption'> 
                                    Graduation Date: June, 2014
                                    </Typography> <br/>
                                    <Typography variant='caption'> 
                                    CGPA: 2.7905
                                    </Typography>

                                </Paper>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}