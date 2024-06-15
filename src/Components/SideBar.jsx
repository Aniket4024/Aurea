import { useDispatch, useSelector } from 'react-redux'
import style from '../CSS/SideBar.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoCloseIcon, MdDeleteIcon } from './Icons'
import { FavCityTrigger, SetLoading, SideBarToggle, settingData } from '../Redux/ForecastReducer/action'

const SideBar = () => {

  const [data,setData] = useState([])
  const dispatch = useDispatch()
  const [location,setLocation] = useState("")
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=d2f76984b16c976562b3fef7f4e28e4f`
  
  const {toggleR,favCitiesR} = useSelector(store=>{
    return {
      toggleR:store.ForecastReducer.toggle,
      favCitiesR:store.ForecastReducer.favCities,
    }
  })


  const handleRemove = (e)=>{
    axios.delete(`http://localhost:8080/fav/${e?.id}`)
    .then((res)=>{
      alert(`${e?.name} Removed From Favorite! 🗑️✅`)
      dispatch(FavCityTrigger())

    })
    .catch((err)=>{
      alert("Error, some thing went wrong ! ❌")
    })


    

  }



  const handleClick = (e)=>{
    setLocation(e?.name)
  }

  // console.log(favCitiesR)

  useEffect(()=>{
    
    
      dispatch(FavCityTrigger())

      
  },[location])


  

  return <div id={style.SideBar} style={{width:toggleR?"20vw":0,padding:toggleR?"10vh 0":"10vh 0"}} className='glass'>
    <span onClick={()=>dispatch(SideBarToggle())}>
      <IoCloseIcon/>
    </span>
    {
      favCitiesR?.map((e)=>{
        return <p key={e?.id} className='flex' onClick={()=>handleClick(e)}>{e?.name} <span className='flex' onClick={(a)=>{handleRemove(e);a.stopPropagation()}}><MdDeleteIcon style={{fontSize:"2.5vmin"}}/></span></p>
      })
    }
  </div>
}

export default SideBar
