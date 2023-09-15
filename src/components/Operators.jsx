import React from 'react'
import styles from './Operators.module.css'
import { ACTIONS } from '../App';

function Operators({dispatch}) {

    const operators = ['/', '*', '-', '+'];

  return (
    <ul className={styles.opparent}>
        {operators.map((val, index) => {
            return <li key={index} 
                       className={styles.allop}
                       onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation: val}})}>{val}</li>
        })}
        <li className={styles.allop}
            onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</li>
    </ul>
  )
}

export default Operators