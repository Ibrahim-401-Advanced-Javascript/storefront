import React from 'react';
import { connect } from 'react-redux';
import { add, remove, reset } from '../../store/cartState.js';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Products = (props) => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>


        <Container className={classes.cardGrid} maxWidth="md">
        {/* End Category Heading */}
          <Grid container spacing={4}>
            {props.products.map((product) => (
              <Grid item key={product.name} xs={12} sm={6} md={4}>

                <Card className={classes.card}>

                  <CardMedia
                    className={classes.cardMedia}
                    image={product.image_url}
                    title={product.image_title}
                  />

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      View Details
                    </Button>
                    <Button size="small" color="primary" onClick={() => props.add(product.name)}>
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>

              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.counter.products
  }
}

const mapDispatchToProps = {
  add,
  remove,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
