import React, {useEffect, useState} from 'react';
import {Collection} from './Collection';
import s from './Photos.module.scss';

const categories = [
    {"name": "Все"},
    {"name": "Море"},
    {"name": "Горы"},
    {"name": "Архитектура"},
    {"name": "Города"}
]


export function Photos() {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [categoryId, setCategoryId] = useState(0);
    const [collection, setCollection] = useState<CollectionType[]>([]);
    const [searchValue, setSearchValue] = useState('');

    const setSearchValueHandler = (value: string) => {
        setSearchValue(value)
    }

    useEffect(() => {
        setIsLoading(true);
        const category = categoryId ? `category=${categoryId}` : '';
        fetch(`https://6300f161e71700618a31a395.mockapi.io/photoCollections?page=${page}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollection(json)
                console.log(json)
            })
            .catch((err) => {
                console.warn(err.message)
                alert('Не удалось загрузить данные')
            }).finally(() => {
            setIsLoading(false)
        })
    }, [categoryId, page])


    return (
        <div className={s.photos}>
            <h1>Моя коллекция фотографий</h1>
            <div className={s.top}>
                <ul className={s.tags}>
                    {categories.map((item, index) => (
                        <li onClick={() => setCategoryId(index)} className={categoryId === index ? s.active : ''}
                            key={item.name}>{item.name}</li>
                    ))}
                </ul>
                <input className={s.searchInput} placeholder="Поиск по названию" value={searchValue}
                       onChange={(e) => setSearchValueHandler(e.currentTarget.value)}/>
            </div>
            <div className={s.content}>
                {isLoading
                    ? <h2>Идет загрузка...</h2>
                    : collection.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item, index) => (
                            <Collection key={index} name={item.name} images={item.photos}/>
                        ))}
            </div>
            <ul className={s.pagination}>
                {
                    [...Array(3)].map((_, i) => <li className={page === (i+1) ? s.active : ''}
                                                    onClick={() => setPage(i+1)}>{i + 1}</li>)
                }
            </ul>
        </div>
    );
};

type CollectionType = {
    category: string
    name: string
    photos: string[]
}