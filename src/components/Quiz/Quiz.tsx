import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './Quiz.module.scss'


const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function Result({correct, clearQuiz}: ResultType) {
    return (
        <div className={s.result}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"/>
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <NavLink to={'/quiz'}>
                <button onClick={clearQuiz}>Попробовать снова</button>
            </NavLink>

        </div>
    );
}

function Game({question, onClickVariant, step}: GameType) {

    const percentage = Math.round(step / questions.length * 100);

    return (
        <>
            <div className={s.progress}>
                <div style={{width: `${percentage}%`}} className={s.progress__inner}></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {question.variants.map((item, index) => {
                    return <li key={item} onClick={() => onClickVariant(index)}>{item}</li>
                })}
            </ul>
        </>
    );
}

export function Quiz() {

    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];

    const onClickVariant = (index: number) => {
        setStep(step+1)
        if (index === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const clearQuiz = () => {
        setStep(0)
        setCorrect(0)
    }

    return (
        <div className={s.gameBlockWrapper}>
            <div className={s.gameBlock}>
                {
                    step !== questions.length
                        ? <Game question={question} onClickVariant={onClickVariant} step={step}/>
                        : <Result correct={correct} clearQuiz={clearQuiz}/>
                }
            </div>

        </div>
    );
}

type GameType = {
    step: number
    question: {
        title: string,
        variants: string[],
        correct: number
    }
    onClickVariant: (index: number) => void
}

type ResultType = {
    correct: number
    clearQuiz: () => void
}