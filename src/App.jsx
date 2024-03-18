/** @format */
//* O que é useeffect?
// O useEffect é um dos hooks fornecidos pelo React que
// atua no ciclo de vida da sua página, nos ajudando a
// gerenciar ações em componentes de função.
// Ele entra em ação quando algo muda(atualiza) na sua
// página, como quando ela é carregada pela primeira
// vez, quando o usuário clica para fechar a sua página
// ou quando um usuário clica em um botão. Seja para
// mudar a cor de fundo, fazer um cálculo ou qualquer
// outra tarefa que utilize lógica de programação, o
// useEffect() estará vigiando cada mudança que houver
// na página e ele irá reagir a essas mudanças.

//! As informações no console são sempre exibida duas vezes por questão do react garantir um codigo seguro

import React, { useEffect, useState } from "react";

export default function App() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //Ação a ser executada após uma atualiazação
  //   console.log("renderiza sempre");
  // });

  //Se quisermos que o UseEffect seja executado em alguem especifico, utilizamos um array de dependencias como um observador
  // useEffect(() => {
  //   console.log("renderiza algo especifico");
  // }, []);

  const [num1, setNum1] = useState();

  function soma() {}

  return (
    <div>
      <h1>UserEffect()</h1>

      <input onClick={soma} type="number" />
      <input type="number" />
      <button>+</button>
      <button>-</button>
      <button>*</button>

      {/* <h2>{count}</h2> */}
      {/* <button onClick={() => setCount(count + 1)}>count</button> */}
    </div>
  );
}
