import React from 'react';
import s from './Header.module.scss'
import {NavLink} from 'react-router-dom';

export const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to={'/'}>Counter</NavLink>
            <NavLink to={'/modal'}>Modal</NavLink>
            <NavLink to={'/quiz'}>Quiz</NavLink>
        </div>
    );
};

