# Module 19 Text Editor PWA

## Description

As a developer, I am able to create notes or code snippets with or without an internet connection
so that I can reliably retrieve them for later use. 


## Table of Contents 

- [Visuals](#visuals)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Sources](#sources)
- [Questions](#questions)

## Visuals
<img width="1185" alt="Screen Shot 2023-04-17 at 7 23 09 PM" src="https://user-images.githubusercontent.com/118075347/232653692-347e8efd-93d3-46f2-899c-53cde1ba7e15.png">

<img width="1420" alt="Screen Shot 2023-04-17 at 7 16 36 PM" src="https://user-images.githubusercontent.com/118075347/232652710-8e7d8493-571e-41db-a26a-a17a01995cf3.png">

<img width="1365" alt="Screen Shot 2023-04-17 at 7 17 38 PM" src="https://user-images.githubusercontent.com/118075347/232653793-c51b28f2-7c5a-4b9b-8c1d-4b26d8ff61c3.png">

## Installation

You will first need to install some dependencies.
In VS Code, open the Terminal. 
On the command line, type the following commands:

npm i 
npm run start:dev
npm run start 

## Usage 
This is a text editor web application. When you open this application in an editor, you will see a client server folder structure. After running `npm run start` from the root directory, the app should start up the backend and serve the client. If the text editor application is run from the terminal, you will find the JavaScript files have been bundled using webpack
If you run the webpack plugins, a generated HTML file, service worker, and a manifest file will appear. You can use the next-gen JavaScript in the app and the text editor still functions in the browser without errors. Upon opening the text editor,
you will see the IndexedDB has immediately created a database storage. You can enter content and subsequently click off of the DOM window and find that the content in the text editor has been saved with IndexedDB. If you reopen the text editor after closing it, the content in the text editor has been retrieved from the IndexedDB. You can download the web application as an icon on your desktop by clicking the Install button. When you load the web application, you will have a registered service worker using workbox. With the registered service worker, you should have the static assets pre cached upon loading along with subsequent pages and static assets. Upon being deployed to Heroku, there should be proper build scripts for a webpack application.

## Tests 

N/A

## License

Boost Software License 1.0

## Sources

Activity 28 on Module 19 for guidance
Nick Herman also helped me with my 'database.js' to render the correct 'get' method

## Badges

[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)

## Questions 

Any questions? 
Feel free to check out my work here:
[@elliehess](@elliehess)

Or you can reach out to me at my email address below:
elhess03@gmail.com
