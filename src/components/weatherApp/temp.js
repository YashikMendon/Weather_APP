import React, { useEffect, useState } from 'react'
import './temp.css';
import WeatherCard from './weatherCard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState('thane');
    const [tempInfo, setTempInfo] = useState('');

    const getWeatherInfo = async () => {
        try {
            let url =
                `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=d260091a471cdb6a59b9db08c6feade4`
            const res = await fetch(url);
            const data = await res.json();

            const { temp, humidity, pressure, } = data.main;
            const { main: weatherMood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
            const myNewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                speed,
                country,
                sunset
            };
            setTempInfo(myNewWeatherInfo);
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className="search">
                    <input type="search" placeholder='Search...' autoFocus id='search' className="searchTerm"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <WeatherCard tempInfo={tempInfo} />
        </>
    )
}

export default Temp
