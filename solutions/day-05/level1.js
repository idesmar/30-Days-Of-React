/*
NOTE: All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter @idesmar. Thank you!

  ? (1) What is props in a React component?
    props in a React component is an object similar to arguments in a regular function.
    These are arguments from the parent component passed to the child/working component where it will be used internally - as content, style, eventHandler, etc

  ? (2) How do you access props in a React component?
    props are passed from the parent JSX element (ie. <JSXElement propsName={propsValue} />).
    It can now be used by the React Component at this point.
    // * passed as an object and used internally as an object
    const JSXElement = (props) => {
      props.propsName
    }
    // * passed as an object and destructured internally for lesser keyboard stroke and readability
    const JSXElement = (props) => {
      const { propsName } = props
    }
    // * destructured props as a parameter other than object
    const JSXElement = ({ propsName }) => {
      propsName
    }
    // * destructured props: combination of object & other data types
    const JSXElement = ({
      propObj: { prop1, prop2, ... }, // * object
      propArr, // * array
      propStr, // * string
      propNum, // * num
      propMethod, // * method or function
      ...
    }) => {
      prop1, prop2
      propArr
      propStr
      propMethod
    }

    // ! Failed Experiment
    @param ...props does not result to any error
    but accessing data inside still requires destructuring
    similar to simply using @param props.

    @param ...props, however, exposes inherited methods/prototypes
    resulting to object props having an additional empty object. Below is the test result

    const Skills = (...props) => {
      console.log(props)
      ...
    }

    > CONSOLE:
    🔽 (2) [{...}, {...}]
      ▶️ 0: {skills: Array(21)}
      ▶️ 1: {}
        length: 2
        ▶️ [[Prototype]]: Array(0)

  ? (3) What data types can we pass as props to components?
    All data types can be passed.
    What has been discussed, currently, are strings, boolean, array, object

  ? (4) What is a propTypes?
    propTypes is a package that assign the data types of the props passed to a component
    note: will be tackled in subsequent days

  ? (5) What is a default propTypes?
  > Perhaps question should be what is defaultProps, no default propTypes exist!
    defaultProps are default props if none is specified/passed
    note: will be tackled deeper in subsequent days
*/
