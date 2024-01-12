import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../routes';

export default function Header() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Tronscan
        </Typography>
        <nav>
          <Button
            variant={'text'}
            color={'primary'}
            component={Link}
            to={ROUTE.HOME}
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Button>
          <Button
            variant={'text'}
            color={'primary'}
            component={Link}
            to={ROUTE.TRANSACTIONS}
            sx={{ my: 1, mx: 1.5 }}
          >
            Transactions
          </Button>
        </nav>
        <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}
