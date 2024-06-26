import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Transactions from '../components/Transacoes';
import '../Styles/global.css'


const transactionList = [
  { codigo: 1, descricao: 'Salário', entrada: 5000.00, saida: 0.00, total: 5000.00 },
  { codigo: 2, descricao: 'Aluguel', entrada: 0.00, saida: 1500.00, total: -1500.00 },
  { codigo: 3, descricao: 'Supermercado', entrada: 0.00, saida: 300.00, total: -300.00 },
  { codigo: 4, descricao: 'Internet', entrada: 0.00, saida: 100.00, total: -100.00 },
  { codigo: 5, descricao: 'Transporte', entrada: 0.00, saida: 150.00, total: -150.00 },
  { codigo: 6, descricao: 'Venda de produto', entrada: 200.00, saida: 0.00, total: 200.00 },
  { codigo: 7, descricao: 'Cinema', entrada: 0.00, saida: 50.00, total: -50.00 },
  { codigo: 8, descricao: 'Manutenção do carro', entrada: 0.00, saida: 400.00, total: -400.00 },
  { codigo: 9, descricao: 'Academia', entrada: 0.00, saida: 70.00, total: -70.00 },
  { codigo: 10, descricao: 'Rendimento de investimentos', entrada: 300.00, saida: 0.00, total: 300.00 },
  { codigo: 11, descricao: 'Gasolina', entrada: 0.00, saida: 200.00, total: -200.00 },
  { codigo: 12, descricao: 'Refeição', entrada: 0.00, saida: 120.00, total: -120.00 },
  { codigo: 13, descricao: 'Consultas médicas', entrada: 0.00, saida: 200.00, total: -200.00 },
  { codigo: 14, descricao: 'Rendimentos de poupança', entrada: 50.00, saida: 0.00, total: 50.00 },
  { codigo: 15, descricao: 'Compras online', entrada: 0.00, saida: 500.00, total: -500.00 },
  { codigo: 16, descricao: 'Serviços domésticos', entrada: 0.00, saida: 150.00, total: -150.00 },
  { codigo: 17, descricao: 'Presente de aniversário', entrada: 0.00, saida: 100.00, total: -100.00 },
  { codigo: 18, descricao: 'Freelance', entrada: 800.00, saida: 0.00, total: 800.00 },
  { codigo: 19, descricao: 'Curso online', entrada: 0.00, saida: 250.00, total: -250.00 },
  { codigo: 20, descricao: 'Doação', entrada: 0.00, saida: 50.00, total: -50.00 },
];

const App = () => {
  const [transactions] = useState(transactionList);

  const totalEntries = transactions.reduce((acc, curr) => acc + curr.entrada, 0);
  const totalExits = transactions.reduce((acc, curr) => acc + curr.saida, 0);
  const currentBalance = totalEntries - totalExits;

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home totalEntries={totalEntries} totalExits={totalExits} currentBalance={currentBalance} />} />
        <Route path="/transactions" element={<Transactions transactions={transactions} />} />
      </Routes>
    </Router>
  );
};

export default App;
