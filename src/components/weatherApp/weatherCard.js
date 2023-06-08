import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState('')
    let sec = tempInfo.sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`


    useEffect(() => {
        if (tempInfo.weatherMood) {
            switch (tempInfo.weatherMood) {
                case 'Clouds':
                    setWeatherState('wi-day-cloudy');
                    break;

                case 'Haze':
                    setWeatherState('wi-fog');
                    break;

                case 'Clear':
                    setWeatherState('wi-day-sunny');
                    break;


                default:
                    setWeatherState('wi-day-sunny');
                    break;
            }
        }

    }, [tempInfo.weatherMood]);

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={`wi ${weatherState}`}></i>
                </div>

                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{tempInfo.temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">{tempInfo.weatherMood}</div>
                        <div className="place">{tempInfo.name}, {tempInfo.country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>

                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={'wi wi-sunset'}></i></p>
                            <p className="extra-info-leftside">{timeStr}<br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={'wi wi-humidity'}></i></p>
                            <p className="extra-info-leftside">{tempInfo.humidity}<br />
                                Humidity
                            </p>
                        </div>
                    </div>

                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p><i className={'wi wi-rain'}></i></p>
                            <p className="extra-info-leftside">{tempInfo.pressure}<br />
                                Pressure
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p><i className={'wi wi-strong-wind'}></i></p>
                            <p className="extra-info-leftside">{tempInfo.speed}<br />
                                Speed
                            </p>
                        </div>
                    </div>


                </div>

            </article>
        </>
    )
}

export default WeatherCard
