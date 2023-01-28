import React, { useState, useEffect } from 'react';
import MyBar from './MyBar';


const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // set data when loading screen (hook)
        setData([
            {id: 1, name: "John"},
            {id: 2, name: "Jane"},
        ])
    }, []);

    return (
        <div>
            <MyBar name="Me App"/>
            <h1>Hello React App</h1>
            {data.length}
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;