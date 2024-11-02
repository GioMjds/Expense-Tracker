/* eslint-disable react/prop-types */
import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

const moneyFormatter = num => {
  let p = num.toFixed(2).split('.');
  let formattedNumber = p[0]
    .split('')
    .reverse()
    .reduce((acc, num, i) => num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc, '');
  return `${formattedNumber}.${p[1]}`;
}

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}${moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction;