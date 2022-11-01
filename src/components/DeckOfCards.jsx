import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class DeckOfCards extends Component {
  render() {
    const { deckOfCard } = this.props;
    return (
      <section>
        { deckOfCard.map((card) => (
          <Card
            cardName={ card.cardName }
            cardImage={ card.cardImage }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
            key={ card.cardName }
          />)) }
      </section>
    );
  }
}

DeckOfCards.propTypes = {
  deckOfCard: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  })).isRequired,
};

export default DeckOfCards;
