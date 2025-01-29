import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infoBox.css";
export default function InfoBox({info}){
    const INIT_URL ="https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

     const HOT_URL ="https://images.unsplash.com/photo-1623857587031-f79f53808d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
     const RAIN_URL ="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return(
        <div className="InfoBox">
            <div className="cardContaner">
            {/* //card componet */}
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  image{ info.humidity > 80 ? <ThunderstormIcon/> :info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2"  color='text.secondary' component={"span"}>
         <p>Temperature ={info.temp}&deg;C</p>
         <p>Humidity ={info.humidity}</p>
         <p>Min Temp ={info.tempMin}&deg;C</p>
         <p>Max Temp ={info.tempMax}&deg;C</p>
         <p>The weather can be described <i>{info.weather} </i>feels like ={info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}