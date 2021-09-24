import Button from './Button';
import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [even, setEven] = useState();

    useEffect(() => {
        setEven(() => {
            return (
                (count % 2) === 0 ? 'Par' : 'Impar'
            );
        })
    }, [count]);

    return (
        <div className="max-w-xs m-10">
            <div className="text-4xl w-100 flex justify-between px-5 text-gray-700"> 
                <span> { count } </span> 
                <span> { even } </span>
            </div>

            <Button 
                handleFunction={ () => setCount(count + 1) }
            >
                Incrementar
            </Button>

            <Button 
                handleFunction={ () => setCount(count - 1) }
            > 
                Decrementar
            </Button>        
        </div>
    );
}

export default Counter;
