import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Blocks from '../components/Blocks';
import Transactions from '../components/Transactions';

export default function Home() {
  return (
    <>
      <Grid xs={6}>
        <Blocks />
      </Grid>
      <Grid xs={6}>
        <Transactions />
      </Grid>
    </>
  );
}
