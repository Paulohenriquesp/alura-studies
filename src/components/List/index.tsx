import React from "react";
import "./styles.scss"

function List() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:00:00",
    },
    {
        tarefa: 'Typescript',
        tempo: "02:00:00"
    }
  ];
  return (
    <aside className="listaTarefas">
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index} className="item">
            <h3> {item.tarefa} </h3>
            <span> {item.tempo} </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
