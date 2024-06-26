import React from 'react';

const TransactionItem = ({ transaction }) => {
  return (
    <tr>
      <td>{transaction.codigo}</td>
      <td>{transaction.descricao}</td>
      <td>{transaction.entrada}</td>
      <td>{transaction.saida}</td>
      <td>{transaction.total}</td>
    </tr>
  );
};

export default TransactionItem;
