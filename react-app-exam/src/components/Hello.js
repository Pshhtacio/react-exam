import React, { useState } from 'react';
import '../css/app.css';

function Hello() {
    const [nameInput, setNameInput] = useState('');

    const handleInputChange = (event) => {
        setNameInput(event.target.value);
    };

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="hello">
            <div>
                <h3>Enter your name: {nameInput}
                <input
                    type="text"
                    value={nameInput}
                    onChange={handleInputChange}
                    placeholder="Type something..."
                />
                <button onClick={handleReload}>Submit</button>
                </h3>
            </div>
        </div>
    );
}

export default Hello;
