import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import WebIcon from '@material-ui/icons/Web';
import DesktopIcon from '@material-ui/icons/DesktopWindows';
import MobileIcon from '@material-ui/icons/PhoneIphone';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    testLayout:{
        backgroundColor: 'white',
        marginBottom: '2%'
    },
    contentPosition:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        padding: '5% 5% 5% 5%'
    }
}));

export default function Services() {
    const classes = useStyles();

    return (
        <section>
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant='h3' align='center'>{'{Service}.'}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container >
                            <Grid item xs={4} className={classes.contentPosition}>
                                <Card label={'Web Development'} icon={<WebIcon fontSize='large'/>}></Card>
                            </Grid>
                            <Grid item xs={4} className={classes.contentPosition}>
                                <Card label={'Window Apps Development'} icon={<DesktopIcon fontSize='large'/>}/>
                            </Grid>
                            <Grid item xs={4} className={classes.contentPosition}>
                                <Card label={'Mobile Apps Development'} icon={<MobileIcon fontSize='large'/>}/>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </section>
    )
}