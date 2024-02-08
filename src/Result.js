export default function Result({result}){
    return (
        <div className='full'>
            <div className='head'>
            <header className='BMIheader'>
            <h2 id='BMIh2'>BMI Calculator</h2>
            </header>
            
        </div>
            <p>Your BMI is {result}</p>
            {(result>=23 && result<27.5)?(
                <>
                <h4>Your BMI is in the overweight category.</h4>
                <div className="container">
                <h3>What your result means</h3>
                <p>A BMI between 23 and 27.4 is classed as overweight.</p>
                <p>An overweight result suggests you could benefit from making some healthy changes.</p>
                <p>If you want to lose some weight, working towards a healthier weight range could reduce the risk of long-term conditions such as type 2 diabetes and heart disease.
                </p>
                </div></>):null
            }
            {(result>=18.5 && result<23)?(
                <>
                <h4>Your BMI is in the healthy weight category.</h4>
                <div className="container">
                  <h3>  What your result means</h3>
                  <p>A BMI between 18.5 and 22.9 is classed as a healthy weight.</p>
                  <p>Try to keep your weight the same or in the healthy weight range for your height.</p>
                  <p>This will help prevent any weight-related health problems, like type 2 diabetes or heart disease.</p>
                </div></>):null
            }
        </div>
    )
}