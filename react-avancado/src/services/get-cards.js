async function getCards(deckId){
    const response = await fetch(`https://deckofcardsapi.com/api/deck/${ deckId }/draw/?count=1`)
    return await response.json()
}

export { getCards }