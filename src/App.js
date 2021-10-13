import React, {useContext} from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import ProductList from './components/productList/ProductList'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './Context'

const App = () => {
  const theme  = useContext(ThemeContext)
  const mode = theme.state.darkMode
  return (
    <>
      <div style={{background:mode ? '#082032': 'white', color:mode ? 'white': '#082032', transition:"all 1s ease"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
      </div>
    </>
  )
}

export default App
