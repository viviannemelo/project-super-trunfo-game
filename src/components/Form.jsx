import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      //   hasTrunfo,
      isSaveButtonDisabled, onSaveButtonClick } = this.props;
    const {
      onInputChange,
      state: {
        cardName, cardImage, cardDescription,
        cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo,
      },
    } = this.props;

    return (
      <div className="Form__register">
        <label htmlFor="name">
          { cardName }
          <input
            data-testid="name-input"
            id="cardName"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            handleChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          { cardDescription }
          <textarea
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            handleChange={ this.handleChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Atributo
          <input
            data-testid="attr1-input"
            id="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            handleChange={ this.handleChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Atributo
          <input
            data-testid="attr2-input"
            id="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            handleChange={ this.handleChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Atributo
          <input
            data-testid="attr3-input"
            id="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Imagem
          <input
            data-testid="image-input"
            id="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            id="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            id="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="save-button">
          <input
            data-testid="save-button"
            id="save-button"
            type="button"
            disabled={ !isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </div>
    );
  }
}

Form.propTypes = {
  state: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }).isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

// Form.state.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   onInputChange: PropTypes.func.isRequired,
// };

export default Form;
