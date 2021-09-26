import React from 'react';
import Card from '../Card/Card';
import './Hire.css';

const Hire = (props) => {
    const { hiredDev } = props;
    let totalCost = 0;
    for (const dev of hiredDev) {
        totalCost = totalCost + dev.salary;
    };

    return (
        <div>
            <div className="hired-dev-info">
                <h3>Hired Dev: {hiredDev.length}</h3>
                {
                    hiredDev?.map(dev => <Card dev={dev}></Card>)
                }
            </div>
            <div className="hired-dev-card">

                <h2 style={{ textAlign: 'center' }}>Total Cost: ${totalCost}</h2>
            </div>
        </div>
    );
};

export default Hire;