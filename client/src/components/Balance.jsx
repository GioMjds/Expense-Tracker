import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const moneyFormatter = num => {
  let p = num.toFixed(2).split('.');
  let formattedNumber = p[0]
    .split('')
    .reverse()
    .reduce((acc, num, i) => num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc, '');
  return `${formattedNumber}.${p[1]}`;
}

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </div>
  )
}

export default Balance