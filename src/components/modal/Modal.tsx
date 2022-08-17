import React, {Dispatch, SetStateAction, useState} from 'react';
import s from './Modal.module.scss'

export function ModalBlock() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={s.modalBlock}>
            <button className={s.openModalBtn} onClick={() => setIsOpen(true)}>✨ Открыть окно</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
            </Modal>
        </div>
    );
}

export const Modal = ({isOpen, setIsOpen, children}: ModalType) => {
    return (
        <div className={`${s.overlay} ${isOpen ? s.show : s.animated}`}>
            <div className={s.modal}>
                <svg height="200" viewBox="0 0 200 200" width="200" onClick={() => setIsOpen(false)}>
                    <title/>
                    <path
                        d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                </svg>
                {children}
            </div>
        </div>
    )
}

type ModalType = {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    children: React.ReactNode
}

