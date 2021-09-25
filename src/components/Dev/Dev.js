import React from 'react';
import './Dev.css';

const Dev = (props) => {
    console.log(props.dev);
    const { name, img, age, company, position, country, salary } = props.dev;
    return (
        <div className="dev-card">
            <img className="dev-img" src={img} alt="" />
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{position} at <strong>{company}</strong></p>
            {/* <p>{company}</p> */}
            <p>From <strong>{country}</strong></p>
            <p><strong>Salary:</strong> ${salary}</p>
            <button className="btn btn-hire">HIRE</button>
        </div>
    );
};

export default Dev;