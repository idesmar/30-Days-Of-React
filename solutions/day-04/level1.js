/*
NOTE: All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter @idesmar. Thank you!

  ? (1) What is the difference between a regular function and an arrow function?
    - arrow functions can be shortened by removing `return` keyword
    eg. const addTwo = (x) => x + 2
    - `this` value of an arrow function is dependent on it's parent/outer function that is NOT an arrow function
    - arrow functions do not have an 'arguments' object
    - arrow functions CANNOT be used as a constructor function
    - arrow functions, when used as a method, is automatically bound (`bind`) to its parent
    NOTE:
    created a codepen for more info https://codepen.io/idesmar/pen/YzawPQo

  ? (2) What is a React Component?
    A React Component is a single node element. It can either be static or dynamic/reusable.

  ? (3) How do you make a React functional component?
    const Heading = () => (
      <h1>Welcome to React</h1>
    )

  ? (4) What is the difference between a pure JavaScript function and a functional component?
    A functional component is required to return a JSX element and called differently
    ie. <JSXElement />
    A pure JS function can be used in different cases
    eg. do something w/ or w/out returning data

  ? (5) How small is a React component?
    A React component can be as small as one JSX element
    eg. const Heading = () => <h1>Welcome to React</h1>

  ? (6) Can we make a button or input field component?
    const InputField = () => <input type='text' />

  ? (7) Make a reusable Button component.
    note: will tackle more in day-05

    ? (8) Make a reusable InputField component.
    note: will tackle more in day-05

    ? (9) Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
    note: will tackle more in day-05
*/
