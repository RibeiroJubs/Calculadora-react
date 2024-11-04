import { useState } from "react";
import "./style.scss";

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setSegundoValor] = useState();
  const [resultado, setResultado] = useState();

  // posso usar só o e ou event pra esse evento
  const pegarPrimentoValor = (e) => {
    setPrimeiroValor(Number(e.target.value));
  };

  const pegarSegundoValor = (e) => {
    setSegundoValor(Number(e.target.value));
  };

  const soma = () => {
    setResultado(primeiroValor + segundoValor);
  };

  const subtracao = () => {
    setResultado(primeiroValor - segundoValor);
  };

  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor);
  };

  const divisao = () => {
    setResultado(primeiroValor / segundoValor);
  };

  return (
    <main>
      <h1>Calculadora</h1>
      {/* onChange evento de mudança */}
      <input
        type="number"
        placeholder="Primeiro valor"
        onChange={pegarPrimentoValor}
      />
      <input placeholder="Segundo valor" onChange={pegarSegundoValor} />
      <button onClick={soma}>+</button>
      <button onClick={subtracao}>-</button>
      <button onClick={multiplicacao}>*</button>
      <button onClick={divisao}>/</button>
      <h3>{resultado}</h3>
    </main>
  );
}
