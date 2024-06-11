# Trans Access Site Prototype

## What's this app?

This is a prototype of CURE Concordia's Trans Access Site. We've built out a basic site architecture as a foundation for future work. As a finished product, this site will help trans people in Quebec find accessible, quality medical, legal, and community care.

The live version of this app can be found [here](https://trans-access-site.web.app/).

## Tech we use

Beyond a knowledge of HTML and CSS and JS basics, we use these more complex technologies - we hope to provide enough information, eventually, that someone who only knows HTML CSS and JS can contribute to the application, for now here are some basics.

### React

React is a modern web framework that allows you to create advanced web browser applications. It is the basis for all of our work.

For documentation please see React's excellent official [getting started guide](https://react.dev/learn) which is designed for beginners and very easy to use.

_todo_

- explain single page app concept
- quick sentence explaining how jsx -> hmtl works
  - [https://react.dev/learn/writing-markup-with-jsx0](https://react.dev/learn/writing-markup-with-jsx)

### MUI

MUI is a component library for React, based off of Google's Material Design 2.0 design spec.

MUI's documentation is [here](https://mui.com/material-ui/getting-started/overview/)

_todo_

- explain components more
  - Components are a way of breaking down the code that will render as html elements. This keeps the code clean and easily navigable by splitting page elements or complex logic into multiple files. It also allows for modularity by, for instance, letting us make a "doctor listing card" component which can then be re-used and filled with the relevant data.
- more theory of MUI
- explain Material Design
- link to Material Design docs
  - [https://m3.material.io/get-started](https://m3.material.io/get-started)
- explain breakpoints
  - how in-depth to get in this explanation?
  - We're using MUI's [breakpoint system](https://mui.com/material-ui/customization/breakpoints/) as defined by its [default theme](https://mui.com/material-ui/customization/default-theme/?expand-path=$.breakpoints) to render elements designed for computer screens, like DesktopNavLinks.js, at desktop screen size; and elements designed for phone screens, like MobileNavLinks.js on phone screens.

### React Router

React Router is a routing library, that is primarily used to make the routes that you see in the url bar of the browser interact with, and provide their own data to React, in order to display particular pages correctly.

React Router has a decent [official tutorial](https://reactrouter.com/en/main/start/tutorial) but we actually reccomend reading their [main concepts page](https://reactrouter.com/en/main/start/concepts) to really understand what is going on.

#### BrowserRouter
React itself renders a "Single Page App", using only one html page behind the scenes, and using javascript to change what that page looks like. This is powerful but takes away the ability for the user to enter URLs to access specific pages of our app, since there is only one webpage loaded.
    
React Router's BrowserRouter component gives us BACK this URL functionality, by intercepting the load of a new page when the user enters a sub-url on our domain, and sending that data to React instead, to load page and component views itself.
    
See especially this page of the React Router docs: https://reactrouter.com/en/6.10.0/start/concepts
    
Component documentation here: https://reactrouter.com/en/6.10.0/router-components/browser-router

_todo_

- explain how BrowserRouter works in our app

- explain RouterLink import maybe

You might notice we this line of code throughout the site:
`import { Link as RouterLink } from "react-router-dom"`
"react-router-dom" is a React Router component that acts as an anchor link (wow!) to other routes (aka pages). HOWEVER because MUI ALSO has a component called Link, used to style anchor text, we import it as RouterLink across the entire project to avoid namespace confusion. This is MUI recommended practice.
[React Router Link docs](https://reactrouter.com/en/main/components/link)
[MUI routing/link docs](https://mui.com/material-ui/guides/routing/)

## Our sponsors

We have currently been funded by

- CURE Concordia
- The Concordia Council on Student Life
- Campus Ex/El Office
- SHIFT
