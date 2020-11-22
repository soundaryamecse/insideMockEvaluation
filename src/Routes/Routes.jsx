import React from 'react'
import {Switch,Route} from 'react-router-dom'
import SchoolTeacher from '../Components/SchoolTeacher'

function Routes(){
    return(
        <Switch>
            <Route path="/" render={(props)=><SchoolTeacher props={props}/>} />
        </Switch>
    )
}

export default Routes