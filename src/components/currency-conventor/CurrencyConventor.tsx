import React, {useEffect, useRef, useState} from 'react';
import s from './CurrencyConventor.module.scss';
import {Block} from "./Block";

export const CurrencyConventor = () => {

    const ratesRef = useRef({} as any)
    const [fromCurrency, setFromCurrency] = useState('RUB');
    const [toCurrency, setToCurrency] = useState('USD');
    const [fromPrice, setFromPrice] = useState(0);
    const [toPrice, setToPrice] = useState(1);

    useEffect(() => {
        fetch('https://cdn.cur.su/api/latest.json').then(res => res.json())
            .then((json) => {
                ratesRef.current = json.rates;
                onChangeToPrice(1)
            }).catch((err) => {
            console.warn(err)
            alert('Не удалось получить информацию!')
        })
    }, [])

    useEffect(() => {
        onChangeFromPrice(fromPrice)
    }, [fromCurrency])

    useEffect(() => {
        onChangeToPrice(toPrice)
    }, [toCurrency])


    const onChangeFromPrice = (value: number) => {
        const price = value / ratesRef.current[fromCurrency];
        const result = price * ratesRef.current[toCurrency];
        setToPrice(+result.toFixed(3))
        setFromPrice(value)
    }

    const onChangeToPrice = (value: number) => {
        const result = (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(+result.toFixed(3))
        setToPrice(value)
    }


    return (
        <div className={s.currencyConventorBlock}>
            <div className={s.currencyConventor}>
                <Block value={fromPrice} currency={fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
                <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency}  onChangeValue={onChangeToPrice}/>
            </div>
        </div>

    );
};

