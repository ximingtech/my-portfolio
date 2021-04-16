import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
                {/* <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
                /> */}
                <CardContent>
                    <div style={{display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
        padding: '10% 5% 10% 5%',}}>{props.icon}</div>
                <Typography gutterBottom variant="h5" component="h2">
                {`${props.label}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions> */}
        </Card>
      );
}

CardUi.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    label: PropTypes.string,
};

export default CardUi;