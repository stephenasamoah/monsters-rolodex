import React from 'react';
import './Card.component.styles.css'

const Card = (props) => {
    return (
        <div className={ 'card-container' }>
            <img src={ `https://api.adorable.io/avatars/285/${ props.person.id }` } alt={ `Avatar of ${ props.person.name }` }/>
            <h3>{ props.person.name }</h3>
            <p>{ props.person.email }</p>
        </div>
    );
};

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
