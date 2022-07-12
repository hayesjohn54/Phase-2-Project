import NavBar from './NavBar'
import GalaxyContainer from './GalaxyContainer'
import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom'

function App(){
    const [page, setPage]= useState('/')
    return (
        <div>
            <NavBar onChangePage={setPage} />
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <ProjectList />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default App;