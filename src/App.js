import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardImage: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardRare: '',
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cardName, cardImage, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardRare, cardTrunfo } = this.state;
    return (
      <div className="container">
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          state={ {
            cardName,
            cardImage,
            cardDescription,
            cardAttr1,
            cardAttr2,
            cardAttr3,
            cardRare,
            cardTrunfo,
          } }
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
        />
      </div>
    );
  }
}

export default App;
