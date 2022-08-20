import React, {useEffect, useState} from 'react';
import s from './UsersBlock.module.scss'
import {Users} from "./Users";
import {Success} from "./Success";

// https://reqres.in/api/users

export const UsersBlock = () => {

    const [users, setUsers] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [invites, setInvites] = useState<Array<string>>([]);
    const [success, setSuccess] = useState(false);


    useEffect(() => {
            fetch('https://reqres.in/api/users')
                .then(res => res.json())
                .then(json => setUsers(json.data))
                .catch(err => {
                    console.warn(err)
                    alert("Ошибка")
                })
                .finally(() => setIsLoading(false))
        }, []
    )

    const onChangeSearchValue = (event: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(event.currentTarget.value)
    }

    const onClickInvite = (id: string) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites((prev) => [...prev, id])
        }
    }

    const onClickSendInvites = () => {
        setSuccess(true)
    }

    return (
        <div className={s.usersBlock}>
            <div className={s.users}>
                {success ? <Success  count={invites.length}/> : <Users items={users} isLoading={isLoading} searchValue={searchValue}
                                                                      onChangeSearchValue={onChangeSearchValue} onClickInvite={onClickInvite}
                                                                      invites={invites} onClickSendInvites={onClickSendInvites}/>}
            </div>

        </div>
    );
};

