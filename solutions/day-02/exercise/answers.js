import { log, levelStart } from '../../global.js'

levelStart('answers')

/*
NOTE: All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter @idesmar. Thank you!

> Exercises: What is React?
? (1) What is React?
  React is a library created by Facebook to make web development easier by utilizing components / modular development; and creates a dynamic web app --- SPA (Single Page Application).
? (2) What is a library?
  A library is a collection of utility codes to make development easier. This removes the repetition of code (DRY) and the complexity and time consumption of "recreating the wheel".
? (3) What is a single page application?
  A SPA allows dynamic changes without page reload. Components are rendered based on a given state. React uses it's virtual DOM (ReactDOM) to update the HTML (DOM).
? (4) What is a component?
  A component represents a portion/s of the virtual DOM. It can either be a single element like a button or a section of DOM (eg. section, main, article)
  note: components are elements that can be injected inside the root container assigned in the document; in most cases it is a div.root
? (5) What is the latest version of React?
  As of writing the version is at React 18
? (6) What is DOM?
  The DOM (Document Object Model) is a tree (of nodes) like structure that represent the document and its child nodes.
  [ document > html > ( head > meta + title + ... ) + ( body > (...) ) ]
? (7) What is React Virtual DOM?
  ReactDOM manipulates the DOM if an element/component requires changing.
  Change flow from React Components --> ReactDOM --> DOM
? (8) What does a web application or a website(composed of) have?
  HTML, CSS, Javascript



> Exercises: Why React?
? (1) Why did you chose to use react?
? (2) What measures do you use to know popularity?
? (3) What is more popular, React or Vue?
  Answer for all 3:
  React is a popular library that most developers and companies use for their web application. One good reason is that its syntax very much resembles Javascript. React is not the "end all, be all" though. Technology is continuously improving and each technology has a best use case (personal/enterprise-wise), hence React must be use accordingly with the situation at hand, as much as possible.


> Exercises: JSX
? (1) What is an HTML element?
  An HTML Element is a type of node that can be found in an HTML document (DOM).
  eg. header, main, section, etc.
? (2) How to write a self closing HTML element?
  Using forward slash (/) in JSX and HTML self closing tag
  * JSX: Required
    HTML: Not required
  eg. <MyComponent />, <br />, <hr /> in JSX
? (3) What is an HTML attribute? Write some of them
  data-some-attribute="something-important" ---> data-some-attribute='something-important'
  class="some-class-name" ---> className='some-class-name'
? (4) What is JSX?
  JSX is an [HTML]template-like application where JSX elements can be transpiled to JS.
  note: Javascript can manipulate elements (eg. document.createElement(), appendChild(), removeChild() etc)
? (5) What is babel?
  Babel is a transpiler that translates JSX to Javascript
? (6) What is a transpiler?
  A transpiler is an application that translates one programming language to another or a language that is backwards compatible; this allows support of new technology to legacy applications or applications that currently do not use new tech.



> Exercises: JSX Elements
? (1) What is a JSX element?
  JSX elements resemble HTML elements stored in a Javascript variable
? (2) Write your name in a JSX element and store it in a name variable
  const name = <h1>siege idesmar</h1>
? (3) Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
  const user = (
    <main>
      <h1>Name: Siege Idesmar</h1>
      <p>Country: Earth country</p>
      <p>Title: Hermit Developer</p>
      <p>Gender: Undisclosed</p>
      <p>Email: Twitter should suffice</p>
      <p>Phone Number: We should get to know each other first😁</p>
    </main>
  )
? (4) Write a footer JSX element
  const footer = (
    <footer>
      <p>No, it's not someone who's into a certain body part!</p>
    </footer>
  )



> Exercises: Inline Style
? (1) Create a style object for the main JSX
  const sectionStyle = {
    margin: 0,
    padding: 0,
    border: '1px solid yellow'
  }
? (2) Create a style object for the footer and app JSX
* used sectionStyle for footer
  const appStyle = {
    border: '3px dashed green',
    backgroundColor: '#00008b'
  }
? (3) Add more styles to the JSX elements
Done


> Exercises: Internal Styles
? (1) Apply different styles to your JSX elements
Done even if the colors are crappy.


> Exercise: Inject data to JSX
? (1) Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
Made a simple timer/counter
*/
