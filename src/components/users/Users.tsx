import React from 'react';
import {Skeleton} from './Skeleton';
import {User} from './User';
import s from './UsersBlock.module.scss';

export const Users = ({
                          items,
                          isLoading,
                          searchValue,
                          onChangeSearchValue,
                          onClickInvite,
                          invites,
                          onClickSendInvites
                      }: UsersType) => {
    return (
        <>
            <div className={s.search}>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
                <input type="text" placeholder="Найти пользователя..." value={searchValue}
                       onChange={(e) => onChangeSearchValue(e)}/>
            </div>
            {isLoading ? (
                <div className={s.skeletonList}>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            ) : (
                <ul className={s.usersList}>
                    {
                        items.filter((item) => {
                            const fullName = (item.first_name + item.last_name).toLowerCase();
                            return fullName.includes(searchValue.toLowerCase())
                                || item.email.toLowerCase().includes(searchValue.toLowerCase())
                        }).map((item) => (
                            <User key={item.id} {...item} onClickInvite={onClickInvite}
                                  isInvited={invites.includes(item.id)}/>
                        ))
                    }
                </ul>
            )}
            {
                invites.length > 0 &&
                <button onClick={onClickSendInvites} className={s.sendInviteBtn}>Отправить приглашение</button>
            }
        </>
    );
};

type UsersType = {
    items: UserType[]
    isLoading: boolean
    searchValue: string
    onChangeSearchValue: (value: React.FormEvent<HTMLInputElement>) => void
    onClickInvite: (id: string) => void
    invites: string[]
    onClickSendInvites: () => void
}

type UserType = {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar: string
}