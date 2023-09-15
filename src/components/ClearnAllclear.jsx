import React from 'react'
import styles from './ClearnAllclear.module.css'
import { ACTIONS } from '../App'

function ClearnAllclear({dispatch}) {
  return (
    <ul className={styles.cparent}>
        <li className={styles.acli} onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</li>
        <li className={styles.acli} onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>Clear</li>
    </ul>
  )
}

export default ClearnAllclear