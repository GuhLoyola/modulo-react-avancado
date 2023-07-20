import Card from '../card/card'
import './cards.css'

const cardsTitle = ['Titulo card 1', 'Titulo card 2', 'Titulo card 3']
const cardsText = ['Esse é o texto do card 1', 'Esse é o texto do card 2', 'Esse é o texto do card 3']

const showCardColor = (color) => {
    alert(`The color is ${ color }`)
}

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>

            <div className='container-cards'>
                {
                    cardsTitle.map(( cardTitle, index ) =>
                        <Card key={ index } showCardColor={ showCardColor }>
                            <h3>{ cardTitle }</h3>
                            <p>{ cardsText[index] }</p>
                        </Card>
                    )
                }

                <Card color='blue' showCardColor={ showCardColor }>
                    <h3>Card com fundo azul</h3>
                    <p>Esse é o texto do card de fundo azul</p>
                </Card>
            </div>
        </div>
    )
}

export default Cards