import { useSelector } from "react-redux"
import style from "../CSS/TimeForcast.module.css"
import { BsCloudFillIcon, BsCloudHaze2FillIcon, BsCloudLightningRainFillIcon, BsCloudRainFillIcon, BsCloudSnowFillIcon, BsCloudSunFillIcon, BsFillCloudsFillIcon, BsSunFillIcon } from "./Icons"


const data = [
    {
        id:0,
        // icon:<RainFilledIcon/>,
        temp:21
    },
    {
        id:1,
        // icon:<ThunderFilledIcon/>,
        temp:20
    },
    {
        id:2,
        // icon:<ThunderFilledIcon/>,
        temp:20
    },
    {
        id:3,
        // icon:<AirFilledIcon/>,
        temp:23
    },
    {
        id:4,
        // icon:<CloudFilledIcon/>,
        temp:24
    },
]


const TimeForcast = () => {

    const {dataR} = useSelector(store=>{
        return {
          dataR:store.ForecastReducer.data
        }
      })
    
      const getDate = ()=>{
        const today = new Date();
        const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
        const year = today.getFullYear();
        const date = today.getDate();
        const minutes = today.getMinutes();
        const hour = today.getHours() == 0 || today.getHours() == 1 || today.getHours() == 2 ? "00" : 
                     today.getHours() == 3 || today.getHours() == 4 || today.getHours() == 5 ? "03" : 
                     today.getHours() == 6 || today.getHours() == 7 || today.getHours() == 8 ? "06" : 
                     today.getHours() == 9 || today.getHours() == 10 || today.getHours() == 11 ? "09" : 
                     today.getHours() == 12 || today.getHours() == 13 || today.getHours() == 14 ? "12" : 
                     today.getHours() == 15 || today.getHours() == 16 || today.getHours() == 17 ? "15" :
                     today.getHours() == 18 || today.getHours() == 19 || today.getHours() == 20 ? "18" : 
                     today.getHours() == 21 || today.getHours() == 22 || today.getHours() == 23 ? "21" : "00"
    
    
        //  "2024-06-17 12:00:00"
        return `${year}-${month}-${date} ${hour}:00:00`;
      }
    



  return <div id={style.timeForcast} className="glass">
    <p>Thunderstroms expected around 00:00</p>
    <hr />
    <div id={style.timeData} className="flex">
        <div className={style.timeForcastItem} >
            <p style={{color:"greenyellow"}}>Now</p>
            <span>
            {
                dataR?.list?.map((e)=>{
                  return e?.dt_txt == getDate() ?   
                    e?.weather?.[0].icon === "01d" || e?.weather?.[0].icon === "01n" ? <BsSunFillIcon/> : 
                    e?.weather?.[0].icon === "02d" || e?.weather?.[0].icon === "02n" ? <BsCloudSunFillIcon/> : 
                    e?.weather?.[0].icon === "03d" || e?.weather?.[0].icon === "03n" ? <BsCloudFillIcon/> : 
                    e?.weather?.[0].icon === "04d" || e?.weather?.[0].icon === "04n" ? <BsFillCloudsFillIcon/> : 
                    e?.weather?.[0].icon === "11d" || e?.weather?.[0].icon === "11n" ? <BsCloudLightningRainFillIcon/> : 
                    e?.weather?.[0].icon === "13d" || e?.weather?.[0].icon === "13n" ? <BsCloudSnowFillIcon/> : 
                    e?.weather?.[0].icon === "50d" || e?.weather?.[0].icon === "50n" ? <BsCloudHaze2FillIcon/> : 
                    e?.weather?.[0].icon === "09d" || e?.weather?.[0].icon === "09n" || e?.weather?.[0].icon === "10d" || e?.weather?.[0].icon === "10n" ? <BsCloudRainFillIcon/> 
                    : null
                
                  : 
                  null
                })
            }
            </span>
            <p className="flex">19 <span>°C</span></p>
        </div>

        {
            data?.map((e)=>{
                return <div className={style.timeForcastItem} key={e?.id}>
                    <p>0{e?.id}</p>
                    <span>
                    {
                        dataR?.list?.map((e)=>{
                        return e?.dt_txt == getDate() ?   
                            e?.weather?.[0].icon === "01d" || e?.weather?.[0].icon === "01n" ? <BsSunFillIcon/> : 
                            e?.weather?.[0].icon === "02d" || e?.weather?.[0].icon === "02n" ? <BsCloudSunFillIcon/> : 
                            e?.weather?.[0].icon === "03d" || e?.weather?.[0].icon === "03n" ? <BsCloudFillIcon/> : 
                            e?.weather?.[0].icon === "04d" || e?.weather?.[0].icon === "04n" ? <BsFillCloudsFillIcon/> : 
                            e?.weather?.[0].icon === "11d" || e?.weather?.[0].icon === "11n" ? <BsCloudLightningRainFillIcon/> : 
                            e?.weather?.[0].icon === "13d" || e?.weather?.[0].icon === "13n" ? <BsCloudSnowFillIcon/> : 
                            e?.weather?.[0].icon === "50d" || e?.weather?.[0].icon === "50n" ? <BsCloudHaze2FillIcon/> : 
                            e?.weather?.[0].icon === "09d" || e?.weather?.[0].icon === "09n" || e?.weather?.[0].icon === "10d" || e?.weather?.[0].icon === "10n" ? <BsCloudRainFillIcon/> 
                            : null
                        
                        : 
                        null
                        })
                    }
                    </span>
                    <p className="flex">{e?.temp} <span>°C</span></p>
                </div>
            })
        } 

    </div>
  </div>
}

export default TimeForcast
