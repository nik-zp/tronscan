import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { useGetTransactionsQuery } from 'src/services/apiQuery';
import { ROUTE } from '../routes';

export default function Blocks() {
  const { data, isSuccess } = useGetTransactionsQuery(
    { limit: 10, start: 0 },
    { pollingInterval: 5000 },
  );

  const rows = isSuccess ? data.data : null;

  if (!rows) return <>Loading...</>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hash</TableCell>
            <TableCell>Block</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={generatePath(ROUTE.TRANSACTION, { id: row.hash })}>
                  {row.hash.slice(0, 10)}...
                </Link>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.block}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
