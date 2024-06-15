import { useDispatch, useSelector } from "react-redux"
import style from "../CSS/Main.module.css"
import DayForcast from "./DayForcast"
import NavBar from "./NavBar"
import TimeForcast from "./TimeForcast"
import { useEffect, useState } from "react"
import { BsCloudHaze2Icon, BsCloudIcon, BsCloudLightningRainIcon, BsCloudRainIcon, BsCloudSnowIcon, BsCloudSunIcon, BsCloudsIcon, BsSunIcon, MdFavoriteBorderIcon, MdFavoriteIcon } from "./Icons"
import SideBar from "./SideBar"
import axios from "axios"
import { FavCityTrigger, SideBarToggle } from "../Redux/ForecastReducer/action"

const Main = () => {

  
  const [fav,setFav] = useState(true)
  const [cityData,setCityData] = useState([])
  const dispatch = useDispatch()
  
  // window.addEventListener("click", dispatch(SideBarToggle()))


  const {dataR,loadingR} = useSelector(store=>{
    return {
      dataR:store.ForecastReducer.data,
      loadingR:store.ForecastReducer.loading,
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


  const handleClick = (e)=>{
    
    

    // axios.post('http://localhost:8080/fav', { "name": e })
    //   .then((res) => {
    //       console.log(res);
    //   })
    //   .catch((err) => {
    //       console.log(err);
    //   });
    const ok = cityData?.find(city => city.name === e);

    if(ok?.name==e){
      alert("Alreay Exist! ⚠️")
    }
    else{

      if(cityData.length <= 15){
        axios.post('http://localhost:8080/fav', { "name": e })
        .then((res) => {
            console.log(res);
            alert(`${e} is added to Favorite City! ✅`)
            dispatch(FavCityTrigger())
        })
        .catch((err) => {
            alert("Error, some thing went wrong ! ❌")
        });
      }
      else{
        alert("You can Not add More than 15 cities in Favorite! ⚠️")
      }
      
    }
  }



  useEffect(()=>{
    axios.get('http://localhost:8080/fav')
    .then((res)=>{
      setCityData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])


  return <div id={style.main}>
    <NavBar/>
    <section className="flex" id={style.container}>
        <div id={style.left} className="flex">
          {
            loadingR ? 
            <div id={style.loader}></div> 
            : 
            <div id={style.mainBody}>
              
                <div id={style.temprature} className="flex">
                      
                      <h1 className="flex">
                      {
                        dataR?.list?.map((e)=>{
                          return e?.dt_txt == getDate() ? e?.main?.temp : null
                        })
                      }
                      <span>°C</span>
                    </h1>
                    <span>
                    {
                      dataR?.list?.map((e)=>{
                        return e?.dt_txt == getDate() ?
        
                          e?.weather?.[0].icon === "01d" || e?.weather?.[0].icon === "01n" ? <BsSunIcon/> : 
                          e?.weather?.[0].icon === "02d" || e?.weather?.[0].icon === "02n" ? <BsCloudSunIcon/> : 
                          e?.weather?.[0].icon === "03d" || e?.weather?.[0].icon === "03n" ? <BsCloudIcon/> : 
                          e?.weather?.[0].icon === "04d" || e?.weather?.[0].icon === "04n" ? <BsCloudsIcon/> : 
                          e?.weather?.[0].icon === "11d" || e?.weather?.[0].icon === "11n" ? <BsCloudLightningRainIcon/> : 
                          e?.weather?.[0].icon === "13d" || e?.weather?.[0].icon === "13n" ? <BsCloudSnowIcon/> : 
                          e?.weather?.[0].icon === "50d" || e?.weather?.[0].icon === "50n" ? <BsCloudHaze2Icon/> : 
                          e?.weather?.[0].icon === "09d" || e?.weather?.[0].icon === "09n" || e?.weather?.[0].icon === "10d" || e?.weather?.[0].icon === "10n" ? <BsCloudRainIcon/> 
                          : null
                        
                        : 
                        null
                      })
                    }
                    </span>
                </div>
                <h3 className="flex"> 
                  {dataR?.city?.country=="IN" ? <img src={require("../Assets/india.png")} alt="" /> : ""} 
                  {dataR?.city?.name} 
                  <span onClick={()=>handleClick(dataR?.city?.name)}>

                      <MdFavoriteIcon/> 
                      {/* : <MdFavoriteBorderIcon/> */}
                  </span> 
                </h3>
                <p>
                  {/* {dataR?.main?.temp_min} : {dataR?.main?.temp_max} | H: {dataR?.main?.humidity}° | P: {dataR?.main?.pressure} */}
                  {

                    dataR?.list?.map((e)=>{
                        return e?.dt_txt == getDate() ? `${e?.main?.temp_min} : ${e?.main?.temp_max} | H: ${e?.main?.humidity}° | P: ${e?.main?.pressure}` : null
                    })

                  }
                </p>
            </div>
          }
        </div>
        <div id={style.right}>
          <TimeForcast/>
          <DayForcast/>
        </div>
    </section>
    <SideBar/>
  </div>
}

export default Main
