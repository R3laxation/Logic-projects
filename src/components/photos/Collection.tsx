import React from 'react';
import s from './Photos.module.scss';

export function Collection({name, images}: CollectionPropsType) {
    return (
        <div className={s.collection}>
            <img className={s.collectionBig} src={images[0]} alt="Item"/>
            <div className={s.collectionBottom}>
                <img className={s.collectionMini} src={images[1]} alt="Item"/>
                <img className={s.collectionMini} src={images[2]} alt="Item"/>
                <img className={s.collectionMini} src={images[3]} alt="Item"/>
            </div>
            <h4>{name}</h4>
        </div>
    );
}

type CollectionPropsType = {
    name: string
    images: string[]
}