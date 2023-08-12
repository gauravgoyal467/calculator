import React, { useState } from 'react'

const Calculator = () => {
    const[firstInput,setFirstInput]=useState("");
    const[secondInput,setSecondInput]=useState("");
    const[error,setError]=useState(false);
    const[text,setText]=useState("");  
    const[success,setSuccess]=useState(false);

    function handlePlus(){
        setError(false);
        setSuccess(false);
        setText("");
        if (firstInput === '' || secondInput === '') {
            setText('Please Enter values!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(firstInput)){
            setText('Enter valid number in input 1!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(secondInput)){
            setText('Enter valid number in input 2!')
            setError(true)
            setSuccess(false)
        }
        else {
            let res = +firstInput + +secondInput;
            setSuccess(true)
            setError(false)
            setText(`Result - ${res}`)
        }
    }

    function handleMinus(){
        setError(false);
        setSuccess(false);
        setText("");
        if (firstInput === '' || secondInput === '') {
            setText('Please Enter values!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(firstInput)){
            setText('Enter valid number in input 1!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(secondInput)){
            setText('Enter valid number in input 2!')
            setError(true)
            setSuccess(false)
        }
        else {
            let res = +firstInput - +secondInput;
            setSuccess(true)
            setError(false)
            setText(`Result - ${res}`)
        }
    }

    function handleMultiply(){
        setError(false);
        setSuccess(false);
        setText("");
        if (firstInput === '' || secondInput === '') {
            setText('Please Enter values!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(firstInput)){
            setText('Enter valid number in input 1!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(secondInput)){
            setText('Enter valid number in input 2!')
            setError(true)
            setSuccess(false)
        }
        else {
            let res = +firstInput * +secondInput;
            setSuccess(true)
            setError(false)
            setText(`Result - ${res}`)
        }
    }

    function handleDivide(){
        setError(false);
        setSuccess(false);
        setText("");
        if (firstInput === '' || secondInput === '') {
            setText('Please Enter values!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(firstInput)){
            setText('Enter valid number in input 1!')
            setError(true)
            setSuccess(false)
        }else if(isNaN(secondInput)){
            setText('Enter valid number in input 2!')
            setError(true)
            setSuccess(false)
        }else if(+firstInput===0 && +secondInput===0){
            setText(`Can't Divide 0 with 0`)
            setError(true)
            setSuccess(false)
        }
        else {
            let res = +firstInput / +secondInput;
            setSuccess(true)
            setError(false)
            setText(`Result - ${res.toFixed(3)}`)
        }
    }
    

  return (
    <div className='container'>
        <h2>React Calculator</h2>
        <input type="text" 
               placeholder='Enter the first number'
               value={firstInput}
               onChange={(e)=>setFirstInput(e.target.value)}
        />
        <input type="text" 
               placeholder='Enter the second number'
               value={secondInput}
               onChange={(e)=>setSecondInput(e.target.value)}
        />
        <div className="buttons">
            <button className='btn' onClick={handlePlus}>+</button>
            <button className='btn' onClick={handleMinus}>-</button>
            <button className='btn' onClick={handleMultiply}>*</button>
            <button className='btn' onClick={handleDivide}>/</button>
        </div>
        <div className='display'>
            {error ? <p className='error'>Error !</p> :(success ? <p className='success'>Success</p>:"")}
            <span>{text}</span>
        </div>
        
    </div>
  )
}

export default Calculator