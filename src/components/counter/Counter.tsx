import s from './Counter.module.scss'
import {useState} from 'react';


export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () =>{
        setCounter(counter + 1)
        console.log(counter + 1)
    }

    const decreaseCounter = () =>{
        counter > 0 && setCounter(counter -1)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                <h2>Счетчик:</h2>
                <h1>{counter}</h1>
                <div className={s.buttonBlock}>
                    <button className={s.minus} onClick={decreaseCounter}>- Минус</button>
                    <button className={s.plus} onClick={increaseCounter}>Плюс +</button>
                </div>
            </div>
        </div>
    );
};

