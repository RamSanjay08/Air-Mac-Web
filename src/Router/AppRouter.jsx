import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom'
import Mac from '../components/Mac'
import IPad from '../components/IPad'
import IPhone from '../components/IPhone'
import Watch from '../components/Watch'
import Support from '../components/Support'
import TV from "../components/TV"
import Music from '../components/Music'
import NavBar from '../components/NavBar'

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Mac/>} />
        <Route path="/ipad" element={<IPad/>} />
        <Route path="/iphone" element={<IPhone/>} />
        <Route path="/watch" element={<Watch/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/tv" element={<TV/>} />
        <Route path="/music" element={<Music/>} />
      </Routes>
    </Router>
  )
}

export default AppRouter