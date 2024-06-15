import { useDispatch, useSelector } from 'react-redux'
import style from '../CSS/SideBar.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { IoCloseIcon, MdDeleteIcon } from './Icons'
import { SetLoading, SideBarToggle, settingData } from '../Redux/ForecastReducer/action'

const SideBar = () => {

  const [data,setData] = useState([])
  const dispatch = useDispatch()
  const [location,setLocation] = useState("")
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=d2f76984b16c976562b3fef7f4e28e4f`
  
  const {toggleR} = useSelector(store=>{
    return {
      toggleR:store.ForecastReducer.toggle
    }
  })


  const handleRemove = (e)=>{
    axios.delete(`http://localhost:8080/fav/${e?.id}`)
    .then((res)=>{
      alert(`${e?.name} Removed From Favorite! 🗑️✅`)
    })
    .catch((err)=>{
      alert("Error, some thing went wrong ! ❌")
    })
  }



  const handleClick = (e)=>{
    setLocation(e?.name)
      // axios.get(url)
      // .then((res)=>{ 
      //   dispatch(settingData(res.data))
      // })
      
  }

  useEffect(()=>{
    axios.get('http://localhost:8080/fav')
    .then((res)=>{
      setData(res.data)

    })
    .catch((err)=>{
      console.log(err)
    })
    
    dispatch(SetLoading(true))
    axios.get(url)
      .then((res)=>{ 
        dispatch(SetLoading(false))
        dispatch(settingData(res.data))
        // setLocation("")
      })
      .catch((err)=>{
        console.log(err)
      })

  },[location])



  return <div id={style.SideBar} style={{width:toggleR?"20vw":0,padding:toggleR?"10vh 0":"10vh 0"}} className='glass'>
    <span onClick={()=>dispatch(SideBarToggle())}>
      <IoCloseIcon/>
    </span>
    {
      data?.map((e)=>{
        return <p key={e?.id} className='flex' onClick={()=>handleClick(e)}>{e?.name} <span className='flex' onClick={()=>handleRemove(e)}><MdDeleteIcon style={{fontSize:"2.5vmin"}}/></span></p>
      })
    }
  </div>
}

export default SideBar
