import React, { useState } from 'react';
import Display from './Display';

function App() {
    const [city, setCity] = useState('');
    const [submittedCity, setSubmittedCity] = useState('New York');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedCity(city);
    };

    return (
        <div style={{backgroundColor:'lightblue',
          height:'50vh',
          width:'70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'}}>
            <form onSubmit={handleSubmit}>
            <h1>Weather Application</h1>
                <input
                    type="text"
                    placeholder="Enter City Name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button type="submit">Update Location</button>
                <Display name={submittedCity} />
            </form>
        </div>
    );
}

export default App;
