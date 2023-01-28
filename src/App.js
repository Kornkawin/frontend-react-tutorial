import React, { useState, useEffect } from 'react';
import MyBar from './MyBar';
import MyCard from './MyCard';


const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://www.melivecode.com/api/attractions')
            .then(res => res.json())
            .then((result) => {
                setData(result)
            })
    }, []);

    return (
        <div>
            <MyBar name="Me App"/>
            <h1>Hello React App</h1>
            {data.map(item => (
                <MyCard
                    key={item.id}
                    name={item.name}
                    coverimage={item.coverimage}
                    detail={item.detail}
                />
            ))}
        </div>
    );
};

export default App;