import React from 'react';
import './App.css';
import Blocks from "./components/Blocks";
import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Transactions from "src/components/Transactions";

function App() {
  return (
    <Container fixed>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            Header
          </Grid>
          <Grid xs={6}>
            <Blocks />
          </Grid>
          <Grid xs={6}>
            <Transactions />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default App;
