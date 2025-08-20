import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MailIcon from '@material-ui/icons/Mail';
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import WorkIcon from '@material-ui/icons/Work';
import emailjs from '@emailjs/browser';
import Wobble from 'react-reveal/Wobble';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
    },
    testLayout:{
        backgroundColor: 'black',
        color: 'white'
    },
    buttonPosition:{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
    },
}));

export default function Education() {
    const classes = useStyles();

    const [fName, setfName] = useState('');
    const [fEmail, setfEmail] = useState('');
    const [fTitle, setfTitle] = useState('');
    const [fMessage, setfMessage] = useState('');
    const [double, setDouble] = useState(false);
    const [chgword, setChgword] = useState('Send');
    const [recap, setRecap] = useState('');

    const clearValue = () => {
        setfName('');
        setfEmail('');
        setfTitle('');
        setfMessage('');
    }

    const submitValue = () => {
        if(fName===''||fEmail===''||fTitle===''||fMessage===''){
            alert("Don't like that la, all field are mandatory. Fill up please.")

        }else{
            // if(recap!==null && recap!==''){
            //     setDouble(true);
            //     setChgword('Sending');
    
            //     const frmdetails = {
            //         'Name' : fName,
            //         'Email' : fEmail,
            //         'Title' : fTitle,
            //         'Message' : fMessage
            //     }
    
            //     emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, frmdetails, process.env.REACT_APP_EMAILJS_USER_KEY)
            //     .then((result) => {
            //         alert(result.text);
            //         setDouble(false);
            //         setChgword('Send')
            //         clearValue();
            //     }, (error) => {
            //         alert(error.text);
            //     });
    
            //     //JSON.stringify(frmdetails) *convert to json string
            // }else{
            //     alert("Please tick recaptcha checkbox.")
            // }

            setDouble(true);
            setChgword('Sending');

            const frmdetails = {
                'Name' : fName,
                'Email' : fEmail,
                'Title' : fTitle,
                'Message' : fMessage
            }

            // emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, frmdetails, process.env.REACT_APP_EMAILJS_USER_KEY)
            // .then((result) => {
            //     // alert(result.text);
            //     setDouble(false);
            //     setChgword('Send')
            //     clearValue();
            // }, (error) => {
            //     alert(error.text);
            // });

            emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                frmdetails,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log("✅ Success:", result.text);
                    alert("Email sent successfully!");
                    setDouble(false);
                    setChgword('Send')
                    clearValue();
                },
                (error) => {
                    console.error("❌ Error:", error.text);
                    alert("Failed to send email.");
                }
            );
        }
    
}

    return (
        <section>
            <div className={classes.root}>
                <Grid container className={classes.testLayout}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12} lg={6} style={{height: '100vh'}}>
                            <iframe id="gmap_canvas" width="100%" height="100%"
                                src="https://maps.google.com/maps?q=taman%20ria%20jaya&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" className={classes.iframe}>
                            </iframe>
                            </Grid>
                            <Grid item xs={12} lg={6} style={{backgroundColor:'black'}}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Wobble>
                                            <Typography variant='h3' align="center">{'{Get In Touch}'}.</Typography>
                                        </Wobble>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container>
                                            <Grid item xs={12} lg={6} style={{marginTop:'5%'}}>
                                                <Typography variant="h6" align="center">
                                                   {/* <strong> Address</strong> */}
                                                   <LocationIcon/>
                                                </Typography>
                                                <Typography variant='subtitle1' align="center">
                                                    Sungai Petani, Kedah
                                                </Typography>
                                                <Typography variant="h6" align="center">
                                                    {/* <strong> Email</strong> */}
                                                    <MailIcon />
                                                </Typography>
                                                <Typography variant='subtitle1' align="center">
                                                    ximon0827@gmail.com
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} lg={6} style={{marginTop:'5%'}}>
                                                <Typography variant="h6" align="center">
                                                    {/* <strong>  Phone</strong> */}
                                                    <PhoneIcon />
                                                </Typography>
                                                <Typography variant='subtitle1' align="center">
                                                    +6010-3961090
                                                </Typography>
                                                <Typography variant="h6" align="center">
                                                    {/* <strong>  Freelance</strong> */}
                                                    <WorkIcon />
                                                </Typography>
                                                <Typography variant='subtitle1' align="center">
                                                    Available
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                   
                                    <Grid item xs={12}>
                                        <form noValidate autoComplete="off">
                                            <Grid container>
                                                <Grid item xs={12} lg={6}  style={{padding:'5% 5% 5% 5%'}}>
                                                    <TextField style={{backgroundColor:'white'}} id="standard-basic" label="Name" fullWidth variant="filled" value={fName} onChange={e => setfName(e.target.value)} disabled={double}/>
                                                </Grid>
                                                <Grid  item xs={12} lg={6} style={{padding:'5% 5% 5% 5%'}}>
                                                    <TextField style={{backgroundColor:'white'}} id="standard-basic" label="Email" fullWidth variant="filled" value={fEmail} onChange={e => setfEmail(e.target.value)} disabled={double}/>
                                                </Grid>
                                                <Grid item xs={12} style={{marginLeft:'5%',marginRight:'5%'}}>
                                                    <TextField style={{backgroundColor:'white'}}  id="standard-basic" label="Subject" variant="filled" value={fTitle} fullWidth onChange={e => setfTitle(e.target.value)} disabled={double}/> 
                                                </Grid>
                                                <Grid item xs={12} style={{margin:'5%'}}>
                                                    <TextField style={{backgroundColor:'white'}} id="standard-basic" label="Message" value={fMessage} fullWidth multiline rows={3} variant="filled" onChange={e => setfMessage(e.target.value)} disabled={double}/>
                                                </Grid>
                                                <Grid item xs={12} className={classes.buttonPosition}>
                                                    <Button variant="contained" color="secondary" onClick={submitValue} disabled={double} style={{marginRight:'2%'}}>
                                                        {chgword}
                                                    </Button>
                                                    <Button variant="contained" color="secondary" onClick={clearValue}>
                                                        Cancel
                                                    </Button>  
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}