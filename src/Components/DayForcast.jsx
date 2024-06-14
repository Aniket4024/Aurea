import style from '../CSS/DayForcast.module.css'
import { AirFilledIcon, CloudFilledIcon, RainFilledIcon, ThunderFilledIcon } from './Icons'


const data = [
  {
    id:0,
    day:"Today",
    icon:<RainFilledIcon/>,
    tempFrom:18,
    tempTo:32
  },
  {
    id:1,
    day:"Thuesday",
    icon:<ThunderFilledIcon/>,
    tempFrom:20,
    tempTo:29
  },
  {
    id:2,
    day:"Friday",
    icon:<AirFilledIcon/>,
    tempFrom:23,
    tempTo:31
  },
  {
    id:3,
    day:"Saturday",
    icon:<CloudFilledIcon/>,
    tempFrom:22,
    tempTo:29
  },
  {
    id:4,
    day:"Sunday",
    icon:<AirFilledIcon/>,
    tempFrom:23,
    tempTo:33
  },
]

const DayForcast = () => {
  return <div className='glass' id={style.dayForcast}>
    <p>5-Days Forecast</p>
    <hr />

    <div id={style.dayData} className='flex'>
      {
        data?.map((e)=>{
          return <div className={`${style.dayForcastItem} flex`} key={e?.id}>
            <p style={{color:`${e?.id===0?"greenyellow":""}`}} >{e?.day}</p>
            <span>{e?.icon}</span>
            <p className="flex">{e?.tempFrom} <span>°C</span></p>
            <div className='flex'>
              {/* <div style={{width:`${e?.tempFrom+e?.tempTo}%`}}></div> */}
            </div>
            <p className="flex">{e?.tempTo} <span>°C</span></p>

          </div>
        })
      }
    </div>

  </div>
}

export default DayForcast
