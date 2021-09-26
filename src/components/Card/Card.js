import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Card.css';

const Card = (props) => {
    const { name, img, position, country } = props.dev;
    const verified = <FontAwesomeIcon icon={faCheckCircle} />;

    const shortCardStyle = {
        margin: 0,
    };

    return (
        <div className="details-card">
            <div>
                <img className="card-img" src={img} alt="" />
            </div>
            <div className="dev-short-info">
                <h3 style={shortCardStyle}>{name} <small style={{ color: 'black' }}>{verified}</small></h3>
                <p style={shortCardStyle}>{position}, {country}</p>
            </div>
        </div>
    );
};

export default Card;