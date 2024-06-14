import style from "../CSS/TimeForcast.module.css"
import { AirFilledIcon, CloudFilledIcon, RainFilledIcon, ThunderFilledIcon } from "./Icons"


const data = [
    {
        id:0,
        icon:<RainFilledIcon/>,
        temp:21
    },
    {
        id:1,
        icon:<ThunderFilledIcon/>,
        temp:20
    },
    {
        id:2,
        icon:<ThunderFilledIcon/>,
        temp:20
    },
    {
        id:3,
        icon:<AirFilledIcon/>,
        temp:23
    },
    {
        id:4,
        icon:<CloudFilledIcon/>,
        temp:24
    },
]


const TimeForcast = () => {
  return <div id={style.timeForcast} className="glass">
    <p>Thunderstroms expected around 00:00</p>
    <hr />
    <div id={style.timeData} className="flex">
        <div className={style.timeForcastItem} >
            <p style={{color:"greenyellow"}}>Now</p>
            <span><RainFilledIcon/></span>
            <p className="flex">19 <span>°C</span></p>
        </div>

        {
            data?.map((e)=>{
                return <div className={style.timeForcastItem} key={e?.id}>
                    <p>0{e?.id}</p>
                    <span>{e?.icon}</span>
                    <p className="flex">{e?.temp} <span>°C</span></p>
                </div>
            })
        } 

    </div>
  </div>
}

export default TimeForcast
