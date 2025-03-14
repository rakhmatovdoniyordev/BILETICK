import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/detail/Detail'
import Favourite from '../pages/favourite/Favourite'
import Home from '../pages/home/Home'
import Layout from '../pages/layout/Layout'
import Search from '../pages/search/Search'
import Session from '../pages/sessions/Session'
import Auth from '../pages/auth/Auth'
import AuthComponent from '../pages/AuthComponent/AuthComponent'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Auth/>}>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/sessions' element={<Session/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/movie/:id' element={<Detail/>}/>
            <Route path='/favourite' element={<Favourite/>}/>
          </Route>
        </Route>
        <Route path="/auth" element={<AuthComponent/>} />
      </Routes>
    </div>
  )
}

export default Router