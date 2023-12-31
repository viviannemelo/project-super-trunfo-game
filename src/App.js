import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import DeckOfCards from './components/DeckOfCards';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
    saveCards: [],
    deckOfCard: [],
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

  onSaveButtonClick = () => {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, saveCards,
      onInputChange, cardTrunfo, hasTrunfo, deckOfCard,
    } = this.state;
    const savedCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deckOfCard,
    };
    saveCards.push(savedCard);
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards,
      onInputChange,
      deckOfCard: deckOfCard.concat(savedCard),
    }, (() => {
      this.setState({
        hasTrunfo: true,
      });
    }));
  };

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardTrunfo, isSaveButtonDisabled,
      hasTrunfo, deckOfCard } = this.state;
    console.log(deckOfCard);
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
          onSaveButtonClick={ this.onSaveButtonClick }
          isCardTrunfo={ this.isCardTrunfo }
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
          onInputChange={ this.onInputChange }
        />
        <DeckOfCards
          deckOfCard={ deckOfCard }
        />
      </div>
    );
  }
}

export default App;
