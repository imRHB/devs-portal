import React, { useEffect, useState } from 'react';
import Dev from '../Dev/Dev';
import './Main.css';

const Main = () => {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/fake-devs/main/devs-portal.json')
            .then(res => res.json())
            .then(data => setDevs(data));
    }, []);

    return (
        <div className="main-container">
            <div className="devs-container">
                {
                    devs.map(dev => <Dev
                        key={dev.id}
                        dev={dev}
                    ></Dev>)
                }
            </div>

            <div className="hire-container">
                <h3>hire section</h3>
            </div>
        </div>
    );
};

export default Main;