import { useState, useEffect } from "react";
import Form from "../forms/form";
import { getCards } from "../../services/get-cards";
import { createDeck } from "../../services/create-deck";

const CardList = (props) => {
    return (
        <ul>
            {
                props.cards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.image} alt={card.value} />
                            <p>{card.value} of {card.suit}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const DeckOfCards = () => {

    const [deck, setDeck] = useState({
        cards: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const deckId = await createDeck()
            const data = await getCards(deckId)

            setDeck(
                {
                    cards: data.cards
                }
            )
        }

        fetchData()
    }, [])

    const addCard = (newCard) => {
        setDeck({
            cards: [...deck.cards, newCard]
        })
    }

    return (
        <section>
            <Form addCard={addCard} />
            {deck.cards.length > 0 ? <CardList cards={deck.cards} /> : "Nenhuma Carta encontrada"}
        </section>
    )
}

export default DeckOfCards