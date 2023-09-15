import Numbers from './components/Numbers'
import Operators from './components/Operators'
import ClearnAllclear from './components/ClearnAllclear'
import styles from './App.module.css'
import { useReducer } from 'react'

export const ACTIONS = {
  ADD_DIGIT: 'add-operand',
  CLEAR: 'clear-input',
  EVALUATE: 'evaluate',
  CHOOSE_OPERATION: 'choose-operation',
  DELETE_DIGIT: 'delete-digit'
}

function reducer(state, {type, payload}){
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      if(state.currentOperand === '0' && payload.digit === '0'){
        return state
      }
      if(payload.digit === '.' && state.currentOperand.includes('.')){
        return state
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ''}${payload.digit}`
      }
      break;

    case ACTIONS.CHOOSE_OPERATION:
      if(state.currentOperand == null && state.previousOperand == null){
        return state;
      }
      if(state.previousOperand == null){
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null
        }
      }
      if(state.currentOperand == null){
        return {
          ...state,
          operation: payload.operation
        }
      }
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null
      }
      break;

    case ACTIONS.EVALUATE:
      if(state.currentOperand == null){
        return {
          ...state,
          currentOperand: state.previousOperand,
          operation: null,
          previousOperand: null
        }
      }
      if(state.previousOperand == null){
        return state
      }
      return {
        ...state,
        overwrite: true,
        currentOperand: evaluate(state) ,
        operation: null,
        previousOperand: null
      }
      break;

    case ACTIONS.CLEAR:
      return {};
      break;
    
    case ACTIONS.DELETE_DIGIT:
      if(state.overwrite){
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }
      if(state.currentOperand == null){
        return{
          ...state,
          currentOperand: state.previousOperand,
          operation: null,
          previousOperand: null
        }
      }
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }

    default:
      break;
  }
}

function evaluate({currentOperand, previousOperand, operation}){
  const curr = parseFloat(currentOperand);
  const prev = parseFloat(previousOperand);
  if(isNaN(curr) || isNaN(prev)){
    return ""
  }
  let calculation = '';
  switch (operation) {
    case '+':
      calculation = prev+curr
      break;
    case '-':
      calculation = prev-curr
      break;
    case '*':
      calculation = prev*curr
      break;
    case '/':
      calculation = prev/curr
      break;
    default:
      break;
  }
  return calculation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0
});

function formatOperation(operand){
  if(operand == null) return
  const [integer, decimal] = operand.split('.');
  if(decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function App() {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})

  return (
    <div className={styles.appparent}>
      <div className={styles.inputval}>
        <div className={styles.previous}>{previousOperand}{operation}</div>
        <div className={styles.current}>{currentOperand}</div>
      </div>
      <div className={styles.clear}><ClearnAllclear dispatch={dispatch}/></div>
      <div className={styles.nums}><Numbers dispatch={dispatch} /></div>
      <div className={styles.oprs}><Operators dispatch={dispatch}/></div>
    </div>
  )
}

export default App