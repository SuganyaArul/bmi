import {useNavigate} from 'react-router-dom';
import { useState } from 'react'

export default function ChildBMI({setChildResult}){
    const [childInputs, setChildInputs] = useState("");
    const [height, setHeight] = useState('feet1');
    const [weight, setWeight] = useState('pounds');
    const [sex, setSex] = useState('Female1')
    const navigate = useNavigate();
    const handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setChildInputs(values => ({...values, [name]: value})) 
       
    }
    
    const handleSubmit=(e) =>{
        // Prevent the browser from reloading the page
        e.preventDefault();
        let meter;
        if(height==='feet1'){
         meter=(Number(childInputs.feet)+Number(childInputs.inches || 0)*0.1)*0.3048;
        }else{
            meter=(Number(childInputs.cm)*0.01)
        }
        let kg;
        if(weight === 'pounds'){
         kg=childInputs.stone*6.35029;
        }else{
            kg=childInputs.kg;
        }
        const bm=kg/(meter*meter);
        const multiplier = Math.pow(10, 1);
        const bmi = Math.round(bm * multiplier) / multiplier;
        setChildResult(bmi)
        if(! isNaN(bmi))
        navigate("/child_result");
      };
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <h4>Height</h4>
            <button className='buttondisplay' onClick={()=>{height === 'feet1'?setHeight('cm1'):setHeight('feet1')}} >Switch to {height ==='feet1'?'cm' :'feet'}</button>
        </div>
        { height ==='feet1'?
        (<div className='cm' placeholder='cm'> 
            <div className='column'>
            <p>Feet</p>
            <input type='number' name='feet' placeholder='Feet' className='input' onChange={handleChange} value={childInputs.feet || ""}></input>
            </div>
            <div className='column'>
            <p>Inches</p>
            <input type='number' name='inches' placeholder='Inches' className='input' onChange={handleChange} value={childInputs.inches || ""}></input>
            </div>
        </div>):
        (<div>
            <p>Centimeters
            </p>
            <input type='number' name='cm' placeholder='cm' className='input' onChange={handleChange} value={childInputs.cm || ""}/>
        </div>)
    }
        <hr/>
        
            <h4>Weight</h4>
            <button className='buttondisplay' onClick={()=>{weight === 'pounds'?setWeight('kg'):setWeight('pounds')}}>Switch to {weight ==='pounds'?'kg' :'pounds'}</button>
        { weight ==='pounds'?(
        <div className='size'>
            <div className='column'>
            <p>Stone</p>
            <input type='number' name='stone' placeholder='Stone' className='input' onChange={handleChange} value={childInputs.stone || ""} ></input>
            </div>
            <div className='column'>
            <p>Pounds</p>
            <input type='number' name='pounds' placeholder='Pounds' className='input' onChange={handleChange} value={childInputs.pounds || ""}></input>
            </div>
        </div>):(
            <div>
                <p>Kilograms</p>
                <input type='number' name='kg' placeholder='kg' className='input' onChange={handleChange} value={childInputs.kg || ""}  />
            </div>
        )
        }
        <hr/>
        <div >
            <h4>Date Of Birth</h4>
            <div>
            <input type='date' placeholder='date of birth' name='date'/>
            </div>
        </div>
        <hr/>
        <div>
            <h4>Sex</h4>
            <p>
            <input type='radio' value='Male' placeholder='Male' checked={sex==='Male1'} onClick={()=>{setSex('Male1')}}/>Male
            <input type='radio' value='Female' placeholder='Female' checked={sex==='Female1'} onClick={()=>{setSex('Female1')}}/>Female
            </p>
        </div>
         <input type='button' value='Calculate' onClick={handleSubmit}/> 
        <input type='button' value='Reset' onClick={()=>{setChildInputs('')}} />
    </form>
    
    )
}