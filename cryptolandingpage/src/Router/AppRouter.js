import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../components/HomePage'
import Fund from '../components/Fund'
import AboutUs from '../components/AboutUs'
import Contact from '../components/Contact'

const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={HomePage} /> 
                <Route path='/aboutus' component={AboutUs} />
                <Route path='/fund' component={Fund} />
                <Route path='/contactus' component={Contact} />
            </Switch>
        </>
    )
}

export default AppRouter
