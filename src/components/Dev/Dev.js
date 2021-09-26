import { faCheckCircle, faCode, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Dev.css';

const Dev = (props) => {
    const { name, img, age, company, position, country, salary } = props.dev;

    const work = <FontAwesomeIcon icon={faCode} />;
    const add = <FontAwesomeIcon icon={faPlusCircle} />;
    const verified = <FontAwesomeIcon icon={faCheckCircle} />;

    return (
        <div className="dev-card">
            <img className="dev-img" src={img} alt="" />
            <h2>{name} <small style={{ color: 'blue' }}>{verified}</small></h2>
            <p>{age} Years</p>
            <p>{work} {position} at <strong>{company}</strong></p>
            <p>From <strong>{country}</strong></p>
            <p><strong>Salary:</strong> ${salary}</p>

            <button
                onClick={() => props.handleHire(props.dev)}
                className="btn btn-hire"
            >{add} HIRE</button>
        </div>
    );
};

export default Dev;