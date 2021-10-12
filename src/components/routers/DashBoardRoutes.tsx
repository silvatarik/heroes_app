import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { DCView } from '../dc/DCView';
import { HeroView } from '../heroes/HeroView';
import { MarvelView } from '../marvel/MarvelView';
import { SearchView } from '../search/SearchView';
import { NavBar } from '../shared/NavBar';

export const DashBoardRoutes = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route exact path="/marvel" component={MarvelView}/>
                <Route exact path="/dc" component={DCView}/>
                <Route exact path="/hero/:heroeID" component={HeroView}/>
                <Route exact path="/search" component={SearchView}/>
                <Redirect to="/marvel"/>
            </Switch>
        </>
    )
}
