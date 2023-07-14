import { Component } from "react";
import { getCards } from "../../services/get-cards";
import { createDeck } from "../../services/create-deck";

class DeckOfCards extends Component {
    constructor(){
        super()
        this.state = {
            cards: []
        }
    }

    async componentDidMount(){
        const deckId = await createDeck()
        const data = await getCards(deckId)

        this.setState(
            {
                cards: data.cards
            }
        )
    }

    render(){
        return(
            <section>
                <ul>
                    {
                        this.state.cards.map((card, index) => {
                            return(
                                <li key={ index }>
                                    <img src={ card.image } alt={ card.value }/>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default DeckOfCards