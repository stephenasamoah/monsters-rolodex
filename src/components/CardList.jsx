import React from 'react';
import './CardList.styles.css'

const CardList = (props) => {
    return (
        <div className={ 'card-list' }>
            { props.children }
        </div>
    );
};

CardList.propTypes = {};
CardList.defaultProps = {};

export default CardList;
