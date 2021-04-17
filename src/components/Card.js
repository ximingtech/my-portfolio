import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

const CardUi = props => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Box p={2}>
                    {props.img}
                </Box>
                <CardContent>              
                <Typography gutterBottom variant="h6" component="h2" align="center">
                <Box fontWeight="bold">
                {`${props.label}`}
                </Box>
                </Typography>
                
                <Typography variant="caption" color="textSecondary" component="p" align="center">
                 {`${props.contentCard}`}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
      );
}

CardUi.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    label: PropTypes.string,
    contentCard: PropTypes.string, 
};

export default CardUi;