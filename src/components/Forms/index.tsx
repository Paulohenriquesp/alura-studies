import React from "react";
import Button from "../Button";
import style from './Forms.module.scss'

class Forms extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.InputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.InputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
          />
        </div>
        <div>
          <Button>
            Adicionar
          </Button>
        </div>
      </form>
    );
  }
}

export default Forms;
