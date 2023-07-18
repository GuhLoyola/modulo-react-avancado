import { useState, useEffect } from "react";
import { getCards } from "../../services/get-cards";
import { createDeck } from "../../services/create-deck";

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

    return (
        <section>
            <ul>
                {
                    deck.cards.map((card, index) => {
                        return (
                            <li key={index}>
                                <img src={card.image} alt={card.value} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default DeckOfCards