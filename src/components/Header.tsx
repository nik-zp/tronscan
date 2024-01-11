import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { ROUTE } from '../routes';

export default function Header() {
  return (
    <div>
      <Link to={'/'}>Home</Link> |<Link to={'/transactions'}>Transactions</Link>{' '}
      |<Link to={'/blocks'}>Blocks</Link>
      <Link to={generatePath(ROUTE.TRANSACTION, { id: '1' })}>
        transactionInfo
      </Link>
    </div>
  );
}
