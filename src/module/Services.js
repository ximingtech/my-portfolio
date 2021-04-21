import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '../components/Card';
import WebIcon from '@material-ui/icons/Web';
import DesktopIcon from '@material-ui/icons/DesktopWindows';
import MobileIcon from '@material-ui/icons/PhoneIphone';
import { ReactComponent as MobileSvg } from '../components/img/mobile.svg';
import { ReactComponent as WebSvg } from '../components/img/website.svg';
import { ReactComponent as WindowSvg } from '../components/img/window.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
import Rotate from 'react-reveal/Rotate';

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
    },
    imageIcon: {
        height: '100%'
      },
      iconRoot: {
        textAlign: 'center'
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
                            <Grid item xs={12} lg={4} className={classes.contentPosition}>
                                <Rotate>
                                <Card 
                                contentCard={'Welcome any type of business to require website development.'} 
                                label={'Web Development'} 
                                icon={<WebIcon fontSize='large'/>} 
                                img={<SvgIcon component={WebSvg} viewBox="0 0 500 750" style={{width:'250px', height:'200px'}}  />} />
                                </Rotate>
                            </Grid>
                            <Grid item xs={12} lg={4} className={classes.contentPosition}>
                                <Rotate>
                                <Card 
                                contentCard={'Welcome any type of business to require desktop application development.'} 
                                label={'Window Apps Development'} 
                                icon={<DesktopIcon fontSize='large'/>} 
                                img={<SvgIcon component={WindowSvg} viewBox="0 0 500 750" style={{width:'250px', height:'200px'}} />}/>
                                </Rotate>
                            </Grid>
                            <Grid item xs={12} lg={4} className={classes.contentPosition}>
                                <Rotate>
                                <Card 
                                contentCard={'Welcome any type of business to require mobile application development.'} 
                                label={'Mobile Apps Development'} 
                                icon={<MobileIcon fontSize='large'/>} 
                                img={<SvgIcon component={MobileSvg} viewBox="0 0 500 750" style={{width:'250px', height:'200px'}} />}/>
                                </Rotate>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </div>
        </section>
    )
}