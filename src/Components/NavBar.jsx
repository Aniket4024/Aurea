import { useEffect, useState } from 'react'
import style from '../CSS/NavBar.module.css'
import { FaLocationDotIcon, MdFavoriteIcon } from './Icons'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { SetLoading, SideBarToggle, settingData } from '../Redux/ForecastReducer/action'

const NavBar = () => {

  const [location,setLocation] = useState("Nagpur")
  const dispatch = useDispatch()


  // const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=d2f76984b16c976562b3fef7f4e28e4f`
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=d2f76984b16c976562b3fef7f4e28e4f`


  const handleSearch = (e)=>{
    if(e.key==="Enter"){
      axios.get(url)
      .then((res)=>{ 
        dispatch(settingData(res.data))
        setLocation("")
      })
    }
  }
  



  useEffect(()=>{
    dispatch(SetLoading(true))

    axios.get(url)
      .then((res)=>{ 
        dispatch(SetLoading(false))
        dispatch(settingData(res.data))
        setLocation("")
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])






  return <nav id={style.navbar} className='flex'>
    <img src={require("../Assets/AureaLogo.png")} alt="" srcset="" />
    <div id={style.navRight} className='flex'>

      <div id={style.searchBox} className='glass'>
        <div className='flex' id={style.inputBox}>
          <span><FaLocationDotIcon/></span>
          <input 
            type="text"
            placeholder='Search Your City - Ex. Nagpur'
            onChange={e=>setLocation(e.target.value)}
            onKeyPress={handleSearch}
            value={location}
          />
        </div>
        <div id={style.inputDropdown}>

        </div>
      </div>

      <div id={style.favoriteCity} className='flex glass' onClick={()=>dispatch(SideBarToggle())}>
        <span><MdFavoriteIcon/></span>
        Favorite Cities
      </div>

    </div>
  </nav>
}

export default NavBar
