# Shop-Shop-Redux

## Description
This application tested our ability to learn Redux and refactor a React app that had Context Api. Redux is a pattern and library for managing and updating application state, using events called "actions." Global state is very useful especially for large application so that you do not have to pass state between all your components especially if some of those components aren't using it. You will instead create a "store" where you will draw all your state from.

This app was an ecommerce site which has a lot of uses for global state, since you do not want to pass information about the products and cart all throughout the application it is very useful to use global state and redux was a good tool for that.

## Link to Application
https://fathomless-fjord-56633.herokuapp.com/

## Link to Github
https://github.com/mmcginley81/shop-shop-redux/


## User Story
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem

## User Criteria

GIVEN an e-commerce platform that uses Redux to manage global state  
WHEN I review the app’s store  
THEN I find that the app uses a Redux store instead of the Context API  
WHEN I review the way the React front end accesses the store  
THEN I find that the app uses a Redux provider  
WHEN I review the way the app determines changes to its global state  
THEN I find that the app passes reducers to a Redux store instead of using the Context API  
WHEN I review the way the app extracts state data from the store  
THEN I find that the app uses Redux instead of the Context API  
WHEN I review the way the app dispatches actions  
THEN I find that the app uses Redux instead of the Context API  
