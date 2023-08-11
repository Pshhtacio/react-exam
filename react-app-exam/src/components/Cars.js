import React, { useState } from 'react';

function Cars() {
    const [carNames, setCarNames] = useState(['Ford', 'BMW', 'Audi']);

    const handleAddCar = (carName) => {
        setCarNames([...carNames, carName]);
    };

    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <ul>
                {carNames.map((carName, index) => (
                    <li key={index}>I am a {carName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Cars;
