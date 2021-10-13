import React, {useContext} from 'react'
import { ThemeContext } from '../../Context'
import "./toggle.css"

const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handle = ()=>{
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <>
       <div className="toggle">
          <img src="images/moon.png" alt="sun" />
          <img src="images/sun.png" alt="moon" />
          <div className="button" onClick={handle} style={{left:theme.state.darkMode ? 25 : 0}}></div>
       </div>
    </>
  )
}

export default Toggle
