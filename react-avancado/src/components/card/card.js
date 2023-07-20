import React from "react";
import './card.css'

// Passando propriedades através de um componente de função:

const Card = ({ children, color, showCardColor}) => {
    return(
            <div className="card" style={ { backgroundColor: color } } onClick={ () => showCardColor(color) }> 
                { children }
            </div>
    )
}

Card.defaultProps = {
    color: 'blueviolet'
}

// Passando propriedades através de um componente de classe: 

// class Card extends React.Component {
//     render() {
//         return (
//             <div className="card">
//                 <h3>{ this.props.title }</h3>
//                 <p>Esse é um texto do card.</p>
//             </div>
//         );
//     }
// }

export default Card