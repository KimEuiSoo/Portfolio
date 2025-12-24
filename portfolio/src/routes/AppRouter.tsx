import React from "react";
import {Route, Routes} from "react-router-dom";
import HomeRouter from "./home/HomeRouter";
import WorkRouter from './work/WorkRouter';
import CareerRouter from './career/CareerRouter';

export const AppRouter = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<HomeRouter/>}/>
                <Route path='/work' element={<WorkRouter/>}/>
                <Route path='/career' element={<CareerRouter/>}/>
            </Routes>
        </div>
    )
}