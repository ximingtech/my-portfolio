import React from 'react';
import AppBar from '../components/Appbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));

export default function Home () {
    const classes = useStyles();

    return (
        <div>
            <AppBar />
            <div className={classes.root}>
                dasdas
            </div>
        </div>
    )
}