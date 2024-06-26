import React from 'react';

const Home = ({ totalEntries, totalExits, currentBalance }) => {
  return (
    <div className="home">
      <h2>Home</h2>
      <p> <strong>Total Entradas:</strong> {totalEntries}</p>
      <p><strong>Total Saídas: </strong>{totalExits}</p>
      <p><strong>Saldo Atual: </strong> {currentBalance}</p>
    </div>
  );
};

export default Home;
