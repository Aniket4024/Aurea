import { useSelector } from 'react-redux'
import style from '../CSS/DayForcast.module.css'
import { BsCloudFillIcon, BsCloudHaze2FillIcon, BsCloudLightningRainFillIcon, BsCloudRainFillIcon, BsCloudSnowFillIcon, BsCloudSunFillIcon, BsFillCloudsFillIcon, BsSunFillIcon } from './Icons'


const today = new Date();
const getDate = ()=>{
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

const getDate1 = ()=>{
  const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
  const year = today.getFullYear();
  const date = today.getDate() + 1;
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

const getDate2 = ()=>{
  const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
  const year = today.getFullYear();
  const date = today.getDate() + 2;
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

const getDate3 = ()=>{
  const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
  const year = today.getFullYear();
  const date = today.getDate() + 3;
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

const getDate4 = ()=>{
  const month = today.getMonth() < 10 ? `0${today.getMonth()+1}` : today.getMonth()+1 ;
  const year = today.getFullYear();
  const date = today.getDate() + 1;
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






const DayForcast = () => {

  const {dataR} = useSelector(store=>{
    return {
      dataR:store.ForecastReducer.data
    }
  })
  

  const day = today.getDay()


  return <div className='glass' id={style.dayForcast}>
    <p>5-Days Forecast</p>
    <hr />

    <div id={style.dayData} className='flex'>
      
      {/* Today */}
      <div className={`${style.dayForcastItem} flex`}>
        <p style={{color:"greenyellow"}}>
          Today
        </p>
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
        <p className="flex"> 
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate() ? e?.main?.temp_min : null
            })
          }
          <span>°C</span>
        </p>
        <div className='flex'>
          {/* <div style={{width:`${e?.tempFrom+e?.tempTo}%`}}></div> */}
        </div>
        <p className="flex">
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate() ? e?.main?.temp_min : null
            })
          }
           <span>°C</span>
        </p>

      </div>


      {/* Today + 1 */}
      <div className={`${style.dayForcastItem} flex`}>
        <p >
          {
            day === 0 ? " Monday" :
            day === 1 ? " Tuesday" :
            day === 2 ? " Wednesday" :
            day === 3 ? " Thursday" :
            day === 4 ? " Friday" :
            day === 5 ? " Saturday" :
            day === 6 ? " Sunday" : null
          }
        </p>
        <span>
        {
          dataR?.list?.map((e)=>{
            return e?.dt_txt == getDate1() ?   
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
        <p className="flex"> 
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate1() ? e?.main?.temp_min : null
            })
          }
          <span>°C</span>
        </p>
        <div className='flex'>
          {/* <div style={{width:`${e?.tempFrom+e?.tempTo}%`}}></div> */}
        </div>
        <p className="flex">
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate1() ? e?.main?.temp_min : null
            })
          }
           <span>°C</span>
        </p>

      </div>


      {/* Today + 2 */}
      <div className={`${style.dayForcastItem} flex`}>
        <p >
          {
            day === 0 ? " Tuesday" :
            day === 1 ? " Wednesday" :
            day === 2 ? " Thursday" :
            day === 3 ? " Friday" :
            day === 4 ? " Saturday" :
            day === 5 ? " Sunday" :
            day === 6 ? " Monday" : null
          }
        </p>
        <span>
        {
          dataR?.list?.map((e)=>{
            return e?.dt_txt == getDate2() ?   
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
        <p className="flex"> 
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate2() ? e?.main?.temp_min : null
            })
          }
          <span>°C</span>
        </p>
        <div className='flex'>
          {/* <div style={{width:`${e?.tempFrom+e?.tempTo}%`}}></div> */}
        </div>
        <p className="flex">
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate2() ? e?.main?.temp_min : null
            })
          }
           <span>°C</span>
        </p>

      </div>


      {/* Today + 3 */}
      <div className={`${style.dayForcastItem} flex`}>
        <p >
          {
            day === 0 ? " Wednesday" :
            day === 1 ? " Thursday" :
            day === 2 ? " Friday" :
            day === 3 ? " Saturday" :
            day === 4 ? " Sunday" :
            day === 5 ? " Monday" :
            day === 6 ? " Tuesday" : null
          }
        </p>
        <span>
        {
          dataR?.list?.map((e)=>{
            return e?.dt_txt == getDate3() ?   
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
        <p className="flex"> 
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate3() ? e?.main?.temp_min : null
            })
          }
          <span>°C</span>
        </p>
        <div className='flex'>
          {/* <div style={{width:`${e?.tempFrom+e?.tempTo}%`}}></div> */}
        </div>
        <p className="flex">
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate3() ? e?.main?.temp_min : null
            })
          }
           <span>°C</span>
        </p>

      </div>


      {/* Today + 4 */}
      <div className={`${style.dayForcastItem} flex`}>
        <p >
          {
            day === 0 ? " Thursday" :
            day === 1 ? " Friday" :
            day === 2 ? " Saturday" :
            day === 3 ? " Sunday" :
            day === 4 ? " Monday" :
            day === 5 ? " Tuesday" :
            day === 6 ? " Wednesday" : null
          }
        </p>
        <span>
        {
          dataR?.list?.map((e)=>{
            return e?.dt_txt == getDate4() ?   
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
        <p className="flex"> 
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate4() ? e?.main?.temp_min : null
            })
          }
          <span>°C</span>
        </p>
        <div className='flex'>
          {/* <div style={{width:`${e?.tempFrom+e?.tempTo}%`}}></div> */}
        </div>
        <p className="flex">
          {
            dataR?.list?.map((e)=>{
              return e?.dt_txt == getDate4() ? e?.main?.temp_min : null
            })
          }
           <span>°C</span>
        </p>

      </div>

    </div>

  </div>
}

export default DayForcast
