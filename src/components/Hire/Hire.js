import React from 'react';
import './Hire.css';

const Hire = (props) => {
    const { hiredDev } = props;
    let totalCost = 0;
    for (const dev of hiredDev) {
        totalCost = totalCost + dev.salary;
    }
    return (
        <div className="hired-dev-card">
            <h3>Hired Dev: {props.hiredDev.length}</h3>
            <h2>{props.hiredDev.name}</h2>
            <h3>Total Cost: ${totalCost}</h3>
        </div>
    );
};

export default Hire;