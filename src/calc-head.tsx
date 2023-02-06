import React, { useState } from 'react';


type state = {
    fNum:number,
    lNum:number,
    result:number,
    numHistory: number[]
};

export function CalculatorView(){
    const [inputNum, setInputNum] = useState<state>({
        fNum: 0,
        lNum: 0,
        result: 0,
        numHistory: []
    });

    function handleInput1(event:React.ChangeEvent<HTMLInputElement>){
        const num: number = Number(event.target.value);
        const inputNumClone = {...inputNum};
        inputNumClone.fNum = num;
        setInputNum(inputNumClone);
    }

    function handleInput2(event:React.ChangeEvent<HTMLInputElement>){
        const num: number = Number(event.target.value);
        const inputNumClone = {...inputNum};
        inputNumClone.lNum = num;
        setInputNum(inputNumClone);
    }


    function addNum(){
       const sum = inputNum.fNum + inputNum.lNum;
       const stateClone = {...inputNum};
       stateClone.result = sum;
       stateClone.numHistory.push(sum);
       setInputNum(stateClone);

    }

    function subNum(){
       const differ = inputNum.fNum - inputNum.lNum;
       const stateClone = {...inputNum};
       stateClone.result = differ;
       stateClone.numHistory.push(differ);
       setInputNum(stateClone);
    }

    function mulNum(){
       const prod = inputNum.fNum * inputNum.lNum;
       const stateClone = {...inputNum};
       stateClone.result = prod;
       stateClone.numHistory.push(prod);
       setInputNum(stateClone);
    }

    function divNum(){
       const quot = inputNum.fNum / inputNum.lNum;
       const stateClone = {...inputNum};
       stateClone.result = quot;
       stateClone.numHistory.push(quot);
       setInputNum(stateClone);
    }


    function clearH(){
        const stateClone = {...inputNum};
        stateClone.numHistory = [];
        setInputNum(stateClone);
    }

    return <>
    
    <h1>Calculator</h1>

    <label htmlFor="fNum">First Number</label>
    <input id="fNum" type="number" placeholder="Enter number" onChange={handleInput1}/><br/><br/>
    <label htmlFor="lNum">Second Number</label>
    <input id="lNum" type="number" placeholder="Enter number" onChange={handleInput2}/>
    
    <h3>{inputNum.result}</h3> 
    

    <button onClick={addNum}>Add (+)</button>
    <button onClick={subNum}>Subtract (-)</button>
    <button onClick={mulNum}>Multiply (*)</button>
    <button onClick={divNum}>Divide (/)</button>
    <button onClick={clearH}>Clear</button>

    <ul>
         {inputNum.numHistory.map((item, index) => ( <li key={index}>{item}</li> ))}
    </ul>
    
    </>
}