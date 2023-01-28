import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material'
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

    // The number of columns is 12 by default for Grid MUI
    // xs for small screen -> 12/12 = 1 card
    // md for medium screen -> 12/4 = 3 cards
    return (
        <div>
            <MyBar name="Me App"/>
            <h1>Hello React App</h1>
            <Grid container spacing={2}>
                {data.map(item => (
                    <Grid item xs={12} md={4}>
                        <MyCard
                            key={item.id}
                            name={item.name}
                            coverimage={item.coverimage}
                            detail={item.detail}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default App;