import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from "../pages/HomeScreen";
import MatchScreen from "../pages/MatchScreen"; 


const Router = () => {
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<HomeScreen/>} />
    <Route path="/matchs" element ={<MatchScreen/>}/>
</Routes>
</BrowserRouter>
    )
}

export default Router