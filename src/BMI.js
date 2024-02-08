//1.Switch cm to feet
//2.switch stone to kg
//if cm calulate and display BMI , if not entered any value throw an error msg
import React from 'react';
import './BMI.css'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import ChildBMI from './ChildBMI';
function BMI({setResult,setChildResult}){
    const [inputs, setInputs] = useState("");
    const [height, setHeight] = useState('feet');
    const [weight, setWeight] = useState('pounds');
    const [bmiFor, setBmiFor] = useState('Adult');
    const [sex, setSex] = useState('Female')
    const navigate = useNavigate();
    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value})) 
       
    }
    
    const handleSubmit=(e) =>{
        // Prevent the browser from reloading the page
        e.preventDefault();
        let meter;
        if(height==='feet'){
         meter=(Number(inputs.feet)+Number(inputs.inches || 0)*0.1)*0.3048;
        }else{
            meter=(Number(inputs.cm)*0.01)
        }
        let kg;
        if(weight === 'pounds'){
         kg=inputs.stone*6.35029;
        }else{
            kg=inputs.kg;
        }
        const bm=kg/(meter*meter);
        const multiplier = Math.pow(10, 1);
        const bmi = Math.round(bm * multiplier) / multiplier;
        setResult(bmi)

        if(! isNaN(bmi)){
            if(bmiFor==='Adult')
           navigate("/Result");
            else
            navigate("/child_result")
        }
      };
      function changeTab(e){
        setBmiFor(e.target.name)
      }
      
return(
    
    <form children='whole' name='forms' onSubmit={handleSubmit} className='full' action='BMIResult.js'>
        <div className='head'>
            <header className='BMIheader'>
            <h2 id='BMIh2'>BMI Calculator</h2>
            </header>
            
        </div>
        <div>
            <button className='small' name='Adult' onClick={changeTab}>Adult</button>
            <button className='small' name='Child' onClick={changeTab}>Child</button>
        </div>
        
            <>
            <h4>Height</h4>
            <button className='buttondisplay' onClick={()=>{height === 'feet'?setHeight('cm'):setHeight('feet')}} >Switch to {height ==='feet'?'cm' :'feet'}</button>
        
        { height ==='feet'?
        (<div className='cm' placeholder='cm'> 
            <div className='column'>
            <p>Feet</p>
            <input type='number' name='feet' placeholder='Feet' className='input' onChange={handleChange} value={inputs.feet || ""}></input>
            </div>
            <div className='column'>
            <p>Inches</p>
            <input type='number' name='inches' placeholder='Inches' className='input' onChange={handleChange} value={inputs.inches || ""}></input>
            </div>
        </div>):
        (<div>
            <p>Centimeters
            </p>
            <input type='number' name='cm' placeholder='cm' className='input' onChange={handleChange} value={inputs.cm || ""}/>
        </div>)
    }
        <hr/>
        
            <h4>Weight</h4>
            <button className='buttondisplay' onClick={()=>{weight === 'pounds'?setWeight('kg'):setWeight('pounds')}}>Switch to {weight ==='pounds'?'kg' :'pounds'}</button>
        { weight ==='pounds'?(
        <div className='size'>
            <div className='column'>
            <p>Stone</p>
            <input type='number' name='stone' placeholder='Stone' className='input' onChange={handleChange} value={inputs.stone || ""} ></input>
            </div>
            <div className='column'>
            <p>Pounds</p>
            <input type='number' name='pounds' placeholder='Pounds' className='input' onChange={handleChange} value={inputs.pounds || ""}></input>
            </div>
        </div>):(
            <div>
                <p>Kilograms</p>
                <input type='number' name='kg' placeholder='kg' className='input' onChange={handleChange} value={inputs.kg || ""}  />
            </div>
        )
        }
        <hr/>
        {bmiFor ==='Adult'?
        <div className='size'>
            <h4>Age</h4>
            <input type='number' name='age' placeholder='Age' className='input' onChange={handleChange} value={inputs.age || ""}></input>
        </div>:
        <div >
        <h4>Date Of Birth</h4>
        <div>
        <input type='date' placeholder='date of birth' name='date'/>
        </div>
    </div>
        }
        <hr/>
        <div>
            <h4>Sex</h4>
            <p>
            <input type='radio' value='Male' placeholder='Male' checked={sex==='Male'} onClick={()=>{setSex('Male')}}/>Male
            <input type='radio' value='Female' placeholder='Female' checked={sex==='Female'} onClick={()=>{setSex('Female')}}/>Female
            </p>
        </div>
         <input type='button' value='Calculate' onClick={handleSubmit}/> 
        <input type='button' value='Reset' onClick={()=>{setInputs('')}} />
        </>
        {/* ):(
            <ChildBMI setChildResult={setChildResult}/>
        )} */}
    </form>
    
)
}

export default BMI;