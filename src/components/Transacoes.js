import React from 'react';
import TransactionItem from '../components/TransactinsItem';

const Transacoes = ({ transactions }) => {
  return (
    <div className="transactions">
      <h2>Transações</h2>
      <table className='tableHome'>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Descrição</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.codigo} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transacoes;
