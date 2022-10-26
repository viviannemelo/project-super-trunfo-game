/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <label htmlFor="name-imput">Nome</label>
        <input
          data-testid="name-input"
          id="name-imput"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <label htmlFor="description-imput">Descrição da carta</label>
        <textarea
          data-testid="description-input"
          id="description-imput"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <label htmlFor="attr1-input">Atributo</label>
        <input
          data-testid="attr1-input"
          id="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <label htmlFor="attr2-input">Atributo</label>
        <input
          data-testid="attr2-input"
          id="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <label htmlFor="attr3-input">Atributo</label>
        <input
          data-testid="attr3-input"
          id="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <label htmlFor="image-input">Imagem</label>
        <input
          data-testid="image-input"
          id="image-input"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <label htmlFor="rare-input">Raridade</label>
        <select
          data-testid="rare-input"
          name="rare-input"
          id="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <label htmlFor="trunfo-input">Super Trunfo</label>
        <input
          data-testid="trunfo-input"
          id="trunfo-input"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <label htmlFor="save-button">Salvar</label>
        <input
          data-testid="save-button"
          id="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default Form;
