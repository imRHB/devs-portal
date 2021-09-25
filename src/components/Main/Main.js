import React, { useEffect, useState } from 'react';
import Dev from '../Dev/Dev';
import Hire from '../Hire/Hire';
import './Main.css';

const Main = () => {
    const [devs, setDevs] = useState([]);
    const [hiredDev, setHiredDev] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imprantu/fake-devs/main/devs-portal.json')
            .then(res => res.json())
            .then(data => setDevs(data));
    }, []);

    const handleHire = dev => {
        const newHiredDev = [...hiredDev, dev];
        setHiredDev(newHiredDev);
    }

    return (
        <div className="main-container">
            <div className="devs-container">
                {
                    devs.map(dev => <Dev
                        key={dev.id}
                        dev={dev}
                        handleHire={handleHire}
                    ></Dev>)
                }
            </div>

            <div className="hire-container">
                <Hire hiredDev={hiredDev}></Hire>
            </div>
        </div>
    );
};

export default Main;