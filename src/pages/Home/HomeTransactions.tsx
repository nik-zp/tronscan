import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useState } from 'react';
import { generatePath, Link } from 'react-router-dom';
import Time from 'src/components/Time';
import { ROUTE } from 'src/routes';
import { useGetTransactionsQuery } from 'src/services/apiQuery';

export default function HomeTransactions() {
  const [asTime, setAsTime] = useState(false);
  const { data, isSuccess } = useGetTransactionsQuery(
    { limit: 2, start: 0 },
    { pollingInterval: 10000 },
  );

  const rows = isSuccess ? data.data : null;

  if (!rows) return <>Loading...</>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Last Transactions</TableCell>
            <TableCell onClick={() => setAsTime(!asTime)}>
              <Stack direction="row" spacing={5}>
                Time{' '}
                {asTime ? (
                  <AccessTimeIcon fontSize="small" />
                ) : (
                  <AccessTimeFilledIcon fontSize="small" />
                )}
              </Stack>
            </TableCell>
            <TableCell>Block</TableCell>
            <TableCell>Owner Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.hash}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={generatePath(ROUTE.TRANSACTION, { id: row.hash })}>
                  {row.hash.slice(0, 20)}...
                </Link>
              </TableCell>
              <TableCell component="th" scope="row" sx={{ width: 200 }}>
                <Time timestamp={row.timestamp} asTime={asTime} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.block}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.ownerAddress}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
