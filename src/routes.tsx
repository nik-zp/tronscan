import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Blocks from './pages/Blocks';
import Home from './pages/Home/Home';
import TransactionInfo from './pages/TransactionInfo';
import Transactions from './pages/Transactions';

export enum ROUTE {
  HOME = '/',
  BLOCKS = '/blocks',
  TRANSACTIONS = '/transactions',
  TRANSACTION = '/transactions/:id',
}

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTE.BLOCKS, element: <Blocks /> },
      { path: ROUTE.TRANSACTIONS, element: <Transactions /> },
      { path: ROUTE.TRANSACTION, element: <TransactionInfo /> },
    ],
  },
]);
