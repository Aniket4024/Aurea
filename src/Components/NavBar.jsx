import style from '../CSS/NavBar.module.css'
import { FaLocationDotIcon, MdFavoriteIcon } from './Icons'

const NavBar = () => {
  return <nav id={style.navbar} className='flex'>
    <img src={require("../Assets/AureaLogo.png")} alt="" srcset="" />
    <div id={style.navRight} className='flex'>

      <div id={style.searchBox} className='glass'>
        <div className='flex' id={style.inputBox}>
          <span><FaLocationDotIcon/></span>
          <input type="text" placeholder='Search Your City - Ex. Nagpur'/>
        </div>
        <div id={style.inputDropdown}>

        </div>
      </div>

      <div id={style.favoriteCity} className='flex glass'>
        <span><MdFavoriteIcon/></span>
        Favorite Cities
      </div>

    </div>
  </nav>
}

export default NavBar
