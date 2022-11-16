import React from 'react';

import '../App.css';

import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const TitleBar = ({ titleName }) => {
  return (
    <AppBar className="TitleBar" >
      <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Typography variant="h5" component="div" align="center" sx={{ flexGrow: 1 }}>
          {titleName}
        </Typography>
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TitleBar;