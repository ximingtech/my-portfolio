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

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: 'black',
        color: 'white'
    },
    customCard:{
        marginTop:'3%',
    },
    container: {
        display:'flex',
        flex: 1,
        justifyContent:'center',
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
    // userIcon: {
    //     backgroundImage: `url("https://images.unsplash.com/photo-1594007759138-855170ec8dc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")`,
    //     //backgroundImage: `url(${Avatar})`,
    //     backgroundPosition: 'center',
    //     backgroundSize: '100% 100%',
    //     borderRadius: '50%',
    //     width:'140px',
    //     height:'140px',
    //     zIndex: 1,
    //     position:'absolute',
    //     margin:'auto',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)'
    // },
}));

export default function About(){
    const classes = useStyles();

    return (
        <section>
        <div className={classes.root}>
            <Typography variant='h2'><strong>{'{About Me?}'};</strong></Typography>
            <div>
                {/* <div className={classes.userIcon} /> */}
                {/* <Card style={{backgroundColor:'white', marginLeft: '300px', marginRight: '300px', marginTop: '100px'}}>
                    <CardContent className={classes.customCard}>
                    <Typography color="inherit" align="center" variant="h3" marked="center" className={classes.textAround}>
                        Tan Xi Ming
                    </Typography>
                    <Typography color="inherit" align="center" variant="subtitle1" marked="center" className={classes.textAround}>
                        <Web/> Web | <Mobile/> Mobile | <Code/> Fullstack Developer
                    </Typography>
                    <Typography align="center" variant="body1"  marked="center">
                        Hi, I am XMTech, and you can call me Xi Ming. I am a Full Stack Developer with 3 years of experience. 
                                    In my current job at Xend company, I had developed various of project to help the company 
                                    grow their business and on-time rate over the two years. Now I am very eager to meet the challenge of developing new territories.
                    </Typography>

                    <div className={classes.displaySet}>
                        <div className={classes.skillDisplay}>
                            <Typography variant="h6">
                                Skill & Experience
                            </Typography>
                            <div className={classes.progressRoot}>
                                <ProgressBar value={50} label={'Java'}></ProgressBar>
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
                    
                    <div className={classes.container}>
                        <Link href="https://www.linkedin.com/in/xi-ming-tan-3bb9321a4/" target="_blank" rel="noreferrer">
                        <MIcon name="fa fa-linkedin-square" iconStyle={{fontSize:35, marginRight:20}} />
                        </Link>
                        <Link href="https://www.facebook.com/bright.ix.7/"  target="_blank" rel="noreferrer">
                        <MIcon name="fa fa-facebook-square" iconStyle={{fontSize:35, marginRight:20}} />
                        </Link>
                        <Link href="https://www.instagram.com/ming_txm/?hl=en"  target="_blank" rel="noreferrer">
                        <MIcon name="fa fa-instagram" iconStyle={{fontSize:35, marginRight:20}} />
                        </Link>
                        <Link href="https://github.com/ximingtech"  target="_blank" rel="noreferrer">
                        <MIcon name="fa fa-github" iconStyle={{fontSize:35}} />
                        </Link>
                    </div>
                    </CardContent>
                </Card> */}

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

                {/* <div className={classes.displaySet}>
                    <div className={classes.skillDisplay}>
                        <Typography variant="h6">
                            Skill & Experience
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
                </div> */}
                    
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
        </div>
        </section>
    )
}