import React from 'react';
import { connect } from 'react-redux';
import { navigate } from '../../store/categoryState.js';

// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

function Categories(props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };
  
  return (
    
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        {props.categories.map((category) => 
          <Tab key={category.name}label={category.name} onClick={() => props.navigate(category.name)}/>
        )}
        </Tabs>
      </Paper>

    {/* <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
          activeCategory: {activeCategory}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          category description: {props.categories.description}
        </Typography>
    
      </Container>
    </div> */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categorynav.categories
  }
}

const mapDispatchToProps = {
  navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
