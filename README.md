# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Calculator Layout:
![calculatorcapture](https://github.com/msaadank/react-calculator/assets/120213382/752211ca-addc-499c-841b-caa9599b2d4e)

# Technologies used:
  ## React:
  In react, 'useReducer' hook is used, providing more complex logic than useState. <br>
  It returns current state and dispatch method. The reducer method specifies how the state gets updated. <br>
  The reducer function gets the state and the action as the parameter. <br>
  The type of actions that I created in useReducer hook are 'ADD_DIGIT', 'CLEAR', 'EVALUATE', 'CHOOSE_OPERATION', 'DELTE_DIGIT', and the payload digit for adding the digit or operation in the input. <br>
  The switch case is used for handling the actions.<br>
  And the dispatch function is passed as a prop to all the buttons in the calculator.
  ## Intl.NumberFormat("en-us", {maximumFractionDigits: 0}):
  A format operation function is created to format the integer number. eg. adding the comma after three digits in the integer like **"2,333"**
