import React from 'react'
import AppRouter from './Router/AppRouter'
import Music from "./components/Music"
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <>
      <Navbar2 />
      <Music />
      {/* <AppRouter/> */}
    </>
  )
}

export default App