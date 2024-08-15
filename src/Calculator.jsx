import { useState } from "react"
import './Calculator.css'
export default function Calculator(){
    const [input,setInput] = useState('')

    const handleClick = (value)=>{
        if(value === '=')
        {
            try{
                setInput(eval(input).toString())
            }
            catch (e){
                setInput("");
            }
        }
        else if(value === 'c'){
            setInput('')
        }
        else{
            setInput((prevInput) => prevInput + value)
        }
    }

    return(
        <div className="calculator">
        <input type="text" value={input}/>
        <br/>
        <div className="buttons">
        <button className="operators" onClick={()=>handleClick('(')}>(</button>
        <button className="operators" onClick={()=>handleClick(')')}>)</button>
        <button className="operators" onClick={()=>handleClick('%')}>%</button>
        <button className="operators" onClick={()=>handleClick('c')}>AC</button>
        <button onClick={()=>handleClick('9')}>9</button>
        <button onClick={()=>handleClick('8')}>8</button>
        <button onClick={()=>handleClick('7')}>7</button>
        <button className="operators" onClick={()=>handleClick('/')}>÷</button>
        <button onClick={()=>handleClick('6')}>6</button>
        <button onClick={()=>handleClick('5')}>5</button>
        <button onClick={()=>handleClick('4')}>4</button>
        <button className="operators" onClick={()=>handleClick('*')}>×</button>
        <button onClick={()=>handleClick('3')}>3</button>
        <button onClick={()=>handleClick('2')}>2</button>
        <button onClick={()=>handleClick('1')}>1</button>
        <button className="operators" onClick={()=>handleClick('-')}>-</button>
        <button onClick={()=>handleClick('0')}>0</button>
        <button onClick={()=>handleClick('.')}>. </button>
        <button className="equals" onClick={()=>handleClick('=')}>=</button>
        <button className="operators" onClick={()=>handleClick('+')}>+</button>
        </div>
        <p>Note: '% operator' - Results Remainder of division</p>
        </div>
    )
}