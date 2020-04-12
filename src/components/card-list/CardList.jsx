import React from 'react';
import './CardList.styles.css'
import Card from "../card/Card.component";

const CardList = (props) => {
    return (
        <div className={ 'card-list' }>
            { props.people.map((person) => <Card key={ person.id } person={ person }/>) }
        </div>
    );
};

CardList.propTypes = {};
CardList.defaultProps = {};

export default CardList;
