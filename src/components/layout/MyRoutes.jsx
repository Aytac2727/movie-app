import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../../pages/About'
import Contact from '../../pages/Contact'
import ErrorPage from '../../pages/ErrorPage'
import Home from '../../pages/Home'

function MyRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default MyRoutes
