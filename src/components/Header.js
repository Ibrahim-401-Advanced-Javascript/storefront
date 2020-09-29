import React from 'react';
import Typography from '@material-ui/core/Typography';

function Header() {
  return (
    <section className="Header">
         <Typography id="store-heading" component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
           Store
         </Typography>
    </section>
  )
}

export default Header
