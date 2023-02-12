/*
1. What is Redux?
Ans: Redux is an open-source JavaScript library for managing and centralizing application state. Basically it is a store to store the state of the variables in your app.

2.Why do we even need redux? How is it better than context API?
Ans: Redux creates a single ‘data store’ for managing state that can be accessed throughout the entire application. Redux essentially makes it easier for developers to understand when, where, why, and how the state of an application has changed.
We can access those states globally (anywhere from our app).
Redux is easy to debug with redux dev tools. Also, it is easier to create new slices after initial setup unlike in context API. Redux is also able to handle high frequency changes in the UI easily compared to context API.

3.. What is Flux?
Ans: Flux is a Javascript architecture or pattern for UI which runs on a unidirectional data flow and has a centralized dispatcher.

4.State the core principles of Redux. 
Ans: The core principles of Redux are->
A) Single source of truth: The global state of our application is always put away in an object tree inside one store.
B) The state is read-only: The only way to change the state of our application is by emitting an action, an object explaining what has happened.
C) Changes are made with pure functions: This principle means that in order to define how the state tree is being transformed by the actions, we have to write pure reducers

5. What are pure function?
Ans: A Pure Function is a function that always returns the same result if the same arguments are passed. They have no side-effects as same input provides same output everytime.

6.Is it true that Redux can only be used with React?
Ans: No, Redux is JS library and can be used with different applications that work on JS.

7. How do you decided which state to make a reducer and which statue you want to make local state?
Ans: If the state of a variable affect (need to access) other than the local component (its children component), we will use reducer or else if its only affect the state of the local component then it can be declared as a local component.

 */