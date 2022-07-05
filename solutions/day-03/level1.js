import { log, levelStart, disclaimer } from '../global.js'

levelStart(1)
log('If you can see this, say HI!')

/*
NOTE: All answers are based on the author's understanding. It is greatly appreciated if any needed corrections or clarifications is brought to the attention of the author. Fastest way to connect is twitter @idesmar. Thank you!

  [Read more]
  https://dev.to/hamza/framework-vs-library-vs-package-vs-module-the-debate-3jpp

  ? (1) What is a module?
    A module is a file that contains function/s that can be imported or exported if needed
    eg. in this repo there is a global.js file that contains 1 variable and 1 function
        import { log, levelStart } from '../global.js'

  ? (2) What is package?
    A package is a module or collection of modules

  ? (3) What is the difference between a module and a package?
    A package can be a collection of module while a module is just one file

  ? (4) What is NPM?
    NPM (Node Package Manager) makes it easy to download and manage packages available in its registry.

  ? (5) What is Webpack?
    Webpack is a module bundler.
    Module bundlers, as it is named, bundles multiple modules into one (module) reducing the HTTP requests of the final project.
    eg. assuming the project has 5 script files (all type="module"). These 5 scripts can be reduced to one script file by a module bundler (ie. Webpack)

  ? (6) How do you create a new React project?
    To initiate a new React project, run `npx create-react-app [app-name]`
    ---
    NOTE: Troubleshooting create-react-app ^5.0
    You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0)" and "We no longer support global installation of Create React App".
    > run `npx clear-npx-cache`, retry npx create-react-app [app-name] and restart machine if an error is encountered
    [Read more]
    https://www.ceos3c.com/web-development/create-react-app-error/#solution-1-clearing-the-cache

  ? (7) What are the files and folders inside a project folder (package.json, package-lock.json or yarn.lock, .gitignore,node_modules and public)?
    .gitignore  README.md  node_modules  package-lock.json  package.json  public  src
    * pubic
      index.html, logo192.png, logo512.png, manifest.json, robots.txt
    * src
      App.css, App.js, App.test.js, index.css, index.js, logo.svg, reportWebVitals.js, setupTests.js
    > Essential files
    * public > index.html
    * src > index.js
    [Read more]
    https://github.com/Asabeneh/30-Days-Of-React/blob/master/03_Day_Setting_Up/03_setting_up.md#react-boilerplate


  ? (8) What is your favorite code editor (I believe that it is Visual Studio Code)?
    Invoking the 5th (Amendment of the US Constitution) 🤓

  ? (9) Add different Visual Studio Code extensions to improve your productivity(eg. prettier, ESLint etc).
    Invoking the 5th (Amendment of the US Constitution) 🤓

  ? (10) Try to make a different custom module in a different file and import it to index.js.
    eg. in this repo there is a global.js file that contains 1 variable and 1 function
        import { log, levelStart } from '../global.js'
*/
