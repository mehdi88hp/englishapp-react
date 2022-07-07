import React from 'react'
import styles from './toggle.module.css'

export default function Toggle() {
    return (
        <div className={styles.toggleButtonCover}>
            <div className={styles.button + ' ' + styles.button2 + ' ' + styles.b2}>
                <input type="checkbox" className={styles.checkbox} />
                <div className={styles.knobs}>
                    <span></span>
                </div>
                <div className={styles.layer}></div>
            </div>
        </div>
    )
}

