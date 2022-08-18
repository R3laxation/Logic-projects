import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './UsersBlock.module.scss'

export const Success = ({count}: SuccessType) => {
    return (
        <div className={s.successBlock}>
            <img src="/assets/success.svg" alt="Success"/>
            <h3>Успешно!</h3>
            <p>Всем {count} пользователям отправлено приглашение.</p>
            <button className={s.sendInviteBtn} onClick={() => window.location.reload()}>Назад</button>
        </div>
    );
};

type SuccessType = {
    count: number
}