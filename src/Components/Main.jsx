import style from "../CSS/Main.module.css"
import DayForcast from "./DayForcast"
import { RainOutlineIcon } from "./Icons"
import NavBar from "./NavBar"
import TimeForcast from "./TimeForcast"

const Main = () => {
  return <div id={style.main}>
    <NavBar/>
    <section className="flex" id={style.container}>
        <div id={style.left} className="flex">
            <div>
                <div id={style.temprature} className="flex">
                    <h1 className="flex">23 <span>°C</span></h1>
                    <span><RainOutlineIcon/></span>
                </div>
                <h3 className="flex"> <img src={require("../Assets/india.png")} alt="" /> Maharshtra, Nagpur | 440035</h3>
                <p>10:43 | H:32° L:18°</p>
            </div>
        </div>
        <div id={style.right}>
          <TimeForcast/>
          <DayForcast/>
        </div>
    </section>
  </div>
}

export default Main
