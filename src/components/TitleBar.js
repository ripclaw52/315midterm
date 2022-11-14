import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TitleBar = ({ props }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h5" component="div" align="center" sx={{ flexGrow: 1 }}>
          {props}
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TitleBar;