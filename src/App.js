import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BMI from './BMI';
import Result from './Result';
import ChildResult from './ChildResult'
export default function App(){
    const [result,setResult] = useState("");
    const [childResult,setChildResult] = useState("");
    return(
        <Routes>
            <Route path='/' element={<BMI setResult={setResult} setChildResult={setChildResult}/>}/>
            <Route path='/result' element={<Result result={result}/>}/>
            <Route path='/child_result' element={<ChildResult childResult={childResult}/>}/>
        </Routes>
        
    )
}