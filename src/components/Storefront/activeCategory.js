import React from 'react';

import { When } from 'react-if';

import { connect } from 'react-redux';
import { navigate } from '../../store/categoryState.js';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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
  root: {
    flexGrow: 1,
  },
}));

function ActiveCategory({activeCategory}) {

  const classes = useStyles();

  return (
    <When condition={!!activeCategory}>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
            {activeCategory}
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {activeCategory}
          </Typography>
  
        </Container>
      </div>
    </When>
  )
}

const mapStateToProps = (state) => {
  return {
    activeCategory: state.categorynav.activeCategory
  }
}

const mapDispatchToProps = {
  navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory)