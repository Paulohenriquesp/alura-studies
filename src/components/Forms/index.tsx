import React from "react";
import Button from "../Button";
import "./styles.scss";

class Forms extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="InputContainer">
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className="InputContainer">
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
          <Button />
        </div>
      </form>
    );
  }
}

export default Forms;
