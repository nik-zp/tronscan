import { useParams } from 'react-router-dom';

export default function TransactionInfo() {
  const { id } = useParams();
  return <div>Transaction: {id}</div>;
}
