import React, { useState } from 'react'
import style from './modalExample.module.css'
import { IoClose } from 'react-icons/io5';

export default function ModalExample({ children, btnName }) {
    const [show, setShow] = useState(false)

    let modalShow = show ? ('block') : ('none')

    return (
        <div>
            <button 
                onClick={() => setShow(!show)}
                className={style.showBtn}
            >{ btnName }</button>
            <div className={style.modalOverlay} 
                style={{ display: modalShow }}
                >
                <div className={style.modalContainer}>
                    <div className={style.modalContent}>
                        <div className={style.modalHeader}>
                            <span><IoClose onClick={() => setShow(!show)}/></span>
                        </div>
                        {children}
                        <div className={style.modalFooter}>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
