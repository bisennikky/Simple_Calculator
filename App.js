import React, { useState } from 'react';

const App = () =>{
  const[numbers, setNumbers]=useState("");

  const clickButtons = (e) =>{
    setNumbers(numbers.concat(e.target.value));
  }
  const clearAllInput = () =>{
    setNumbers("");
  }

  const iteration = () =>{
    setNumbers(eval(numbers).toString()); 
  }
   
  return(
        <>
      <div className='calcy-cointainer'>
      <h1>CALCULATOR</h1>
          <input type='text' placeholder='0' id='display' value={numbers} onChange={(e) =>{
            setNumbers(e.target.value)
          }}/><br /><br />
          <input type='button' value='0' className='buttons' onClick={clickButtons}/>
          <input type='button' value='9' className='buttons' onClick={clickButtons}/>
          <input type='button' value='8' className='buttons' onClick={clickButtons}/>
          <input type='button' value='7' className='buttons' onClick={clickButtons}/><br />
          <input type='button' value='6' className='buttons' onClick={clickButtons}/>
          <input type='button' value='5' className='buttons' onClick={clickButtons}/>
          <input type='button' value='4' className='buttons' onClick={clickButtons}/>
          <input type='button' value='3' className='buttons' onClick={clickButtons}/><br />
          <input type='button' value='2' className='buttons' onClick={clickButtons}/>
          <input type='button' value='1' className='buttons' onClick={clickButtons}/>
          <input type='button' value='+' className='buttons' onClick={clickButtons}/>
          <input type='button' value='*' className='buttons' onClick={clickButtons}/><br />
          <input type='button' value='-' className='buttons' onClick={clickButtons}/>
          <input type='button' value='/' className='buttons' onClick={clickButtons}/>
          <input type='button' value='.' className='buttons' onClick={clickButtons}/>
          <input type='button' value='%' className='buttons' onClick={clickButtons}/><br />
          <input type='button' value='!' className='buttons' onClick={clickButtons}/>
          <input type='button' value='(' className='buttons' onClick={clickButtons}/>          
          <input type='button' value=')' className='buttons' onClick={clickButtons}/>          
          <input type='button' value='^' className='buttons' onClick={clickButtons}/><br />
          <input type='button' value='Clear' className='special-btn' onClick={clearAllInput}/>
          <input type='button' value='=' className='special-btn' onClick={iteration}/>
      </div>

          </>
  )
}
export default App;