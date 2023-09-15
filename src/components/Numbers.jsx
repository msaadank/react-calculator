import React from 'react'
import styles from './Numbers.module.css';
import { ACTIONS } from '../App';

function Numbers({dispatch}) {
    const nums = [1,2,3,4,5,6,7,8,9,0,'.'];

    const classGenerator = (num) => {
        switch (num) {
            case '.':
                return `${styles.divd} ${styles.allli}`
                break;
            case 1:
                return `${styles.div1} ${styles.allli}`
                break;
            case 2:
                return `${styles.div2} ${styles.allli}`
                break;
            case 3:
                return `${styles.div3} ${styles.allli}`
                break;
            case 4:
                return `${styles.div4} ${styles.allli}`
                break;
            case 5:
                return `${styles.div5} ${styles.allli}`
                break;
            case 6:
                return `${styles.div6} ${styles.allli}`
                break;
            case 7:
                return `${styles.div7} ${styles.allli}`
                break;
            case 8:
                return `${styles.div8} ${styles.allli}`
                break;
            case 9:
                return `${styles.div9} ${styles.allli}`
                break;
            case 0:
                return `${styles.div0} ${styles.allli}`
                break;
            default:
                break;
        }
    }

    return (
        <ul className={styles.parent}>
            {nums.map((val, index) => {
                return <li key={index} 
                        className={classGenerator(val)}
                        onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: val}})}

                        >{val}</li>
            })}
        </ul>
    )
}

export default Numbers;