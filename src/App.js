import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        fetch('/fixtures')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                if (Array.isArray(data)) {
                    setFixtures(data);
                } else {
                    console.error('Data is not an array:', data);
                    setFixtures([]);
                }
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="App">
            <h1>Przyszłe mecze Manchester City</h1>
            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Gospodarz</th>
                        <th>Przeciwnik</th>
                        <th>Stadion</th>
                    </tr>
                </thead>
                <tbody>
                    {fixtures.map((fixture, index) => (
                        <tr key={index}>
                            <td>{fixture.date}</td>
                            <td>
                                <img src={fixture.homeTeam.crest} alt={`${fixture.homeTeam.name} crest`} width="30" height="30"/>
                                {fixture.homeTeam.name}
                            </td>
                            <td>
                                <img src={fixture.opponent.crest} alt={`${fixture.opponent.name} crest`} width="30" height="30"/>
                                {fixture.opponent.name}
                            </td>
                            <td>{fixture.venue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
