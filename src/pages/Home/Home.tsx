import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import HomeTransactions from './HomeTransactions';

export default function Home() {
  return (
    <>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Tronscan
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          My first SPA application. Used React + Redux (RTK)
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          <HomeTransactions />
        </Grid>
      </Container>
    </>
  );
}
