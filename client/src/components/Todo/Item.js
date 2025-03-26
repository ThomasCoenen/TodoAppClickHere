import React from 'react'
import styles from "./styles.module.css";

export default function Item({text, remove, update}) {
    return (
        <div className={styles.item}>
            <div className={styles.text}>{text}</div>
            <div className={styles.icons}>
                <i className="ri-pencil-fill" onClick={update}></i>
                <i className="ri-delete-bin-7-fill" onClick={remove}></i>
            </div>
        </div>
    )
}