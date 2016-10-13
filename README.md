# Super Cinema
A simple online movies rental exercise


## Install and Running
`git clone https://github.com/kag17/super-cinema.git`

or just export the files:

`svn export https://github.com/kag17/super-cinema/trunk ./dir`

1. cd super-cinema
2. npm install
3. Start Mongo: mongod --dbpath <your_projects_folder>/super-cinema/db
4. npm start
5. navigate to http://localhost:3000 in your browser of choice.

### Prerequisites
You must have Node.js and MongoDB installed before attempting steps above.


## Overview

### CSS Modules
CSS files loaded into components are locally scoped and you can point to class names with javascript. You can also compose classes together, also from other files. These are also hot loaded. Read more about them [here](http://glenmaddern.com/articles/css-modules).

To turn off CSS Modules remove it from the `webpack.config.js` file.

### Babel and Linting
Both Node server and frontend code runs with Babel. And all of it is linted. With atom you install the `linter` package, then `linter-eslint` and `linter-jscs`. You are covered. Also run `npm run eslint` or `npm run jscs` to verify all files. I would recommend installing `language-babel` package too for syntax highlighting

### Beautify
With a beautify package installed in your editor it will also do that
