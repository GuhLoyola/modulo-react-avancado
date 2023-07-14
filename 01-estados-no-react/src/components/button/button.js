import React, { Component } from 'react';
import './button.css'

// const Button = (props) => {
//     return <button className='btn'>{ props.label }</button>
// }

const sayHello = () => {
    alert('Olá 🙂🙂')
}

class Button extends Component {
    render() {
        return <button className='btn' onClick={ sayHello }>{ this.props.label }</button>
    }
}

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button;