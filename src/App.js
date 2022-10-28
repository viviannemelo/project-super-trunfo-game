import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
    // onSaveButtonClick: true,
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, (() => {
      const {
        cardName, cardImage, cardDescription,
        cardAttr1, cardAttr2, cardAttr3, cardRare,
      } = this.state;
      const namePlace = cardName.length > 0;
      const nameDescription = cardDescription.length > 0;
      const imagePlace = cardImage.length > 0;
      const rarePlace = cardRare.length > 0;
      const attr1 = Number(cardAttr1);
      const attr2 = Number(cardAttr2);
      const attr3 = Number(cardAttr3);
      const maxSum = 210;
      const maxAttr = 90;
      const calcAttr = attr1 + attr2 + attr3 <= maxSum;
      const attrs = attr1 <= maxAttr
        && attr2 <= maxAttr
        && attr3 <= maxAttr
        && attr1 >= 0
        && attr2 >= 0
        && attr3 >= 0;
      const verifyAttr = calcAttr && attrs;
      const verifyPlaces = namePlace && nameDescription
        && imagePlace && verifyAttr && rarePlace;
      this.setState({
        isSaveButtonDisabled: verifyPlaces,
      });
    }));
  };

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, isSaveButtonDisabled, onSaveButtonClick,
      hasTrunfo } = this.state;
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
