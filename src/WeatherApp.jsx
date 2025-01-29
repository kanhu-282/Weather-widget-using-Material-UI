import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({ 
        city:"Mumbai",
        feelsLike: 15.49,
        humidity:36,
        temp:16.81,
        tempMax:16.81,
        tempMin:16.81,
        weather:"clear sky",
    });

    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather app</h2>
             <SearchBox updateInfo={updateInfo}/>
             <InfoBox info={weatherInfo}/>
        </div>
    )
}