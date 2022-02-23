import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: "",
      idade: 0,
      vaiComparecer: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { handleChange } = this;
    const { estadoFavorito, idade, vaiComparecer } = this.state;
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
          <fieldset>
            {" "}
            <legend>Qual Estado</legend>
            <label>
              Diga qual o seu Estado favorito! De React ou do Brasil, você
              decide! =)
              <textarea
                name="estadoFavorito"
                value={estadoFavorito}
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Qual idade</legend>
            <label>
              Qual a sua idade?
              <input
                type="number"
                name="idade"
                onChange={handleChange}
                value={idade}
              />
            </label>
          </fieldset>
          <fieldset>
            {" "}
            <legend>Vai comparecer</legend>
            <label>
              Você gostaria de conhecer?
              <input
                type="checkbox"
                name="vaiComparecer"
                value={vaiComparecer}
                onChange={handleChange}
              />
            </label>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
