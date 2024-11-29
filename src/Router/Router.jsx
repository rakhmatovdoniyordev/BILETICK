import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Search from '../pages/search/Search'
import Session from '../pages/sessions/Session'

const Router = () => {
  const Mode = useSelector((state) =>  state.isDarkMode.isDarkMode);
  return (
    <div>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/sessions' element={<Session/>}/>
            <Route path='/search' element={<Search/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default Router