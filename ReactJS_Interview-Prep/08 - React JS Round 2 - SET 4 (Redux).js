/*

1.What do you understand by ACTIONs in Redux's architecture? Explain with example.
Ans: Actions are plain JavaScript object that contains information. Action is one of the building blocks of Redux. They are the only way you can send data from your application to your Redux store.
Eg: {
    type: "LOGIN",
        payload: {
            username: "Demo",
            password: "pass"
    }
}

2. What are reducers in Redux's architecture? Show with an example.
Ans: Reducers are pure functions that take the current state of an application, perform an action, and return a new state. The reducer handles how the state (application data) will change in response to an action.
Eg: const initialState = {login: false}
const reducer = (state, action) => {
    if(action.type === 'toggle'){
        return {login: !state.login};
    }else{
        return state;
    }
}

3. Explain the typical data flow in an application made using React and Redux (Redux Lifecycle for an application).
Ans: Redux follows the unidirectional data flow. It means that your application data will follow in one-way binding data flow.
A) An action is dispatched when a user interacts with the application.
B) The root reducer function is called with the current state and the dispatched action. The root reducer may divide the task among smaller reducer functions, which ultimately returns a new state.
C) The store notifies the view by executing their callback functions.
D) The view can retrieve updated state and re-render again.

4.Name all the Redux Store methods. Explain each one of them in details with examples as to when to use them?
Ans: Store is an object which provides the state of the application. This object is accessible with help of the provider. Methods used by redux store are->
A) createStore(): To create a store object in redux.
B) dispatch(action): To change the state of store data by using the actions.
C) getState(): For getting the current state of the store in redux.

5.Explain with an example how to set the initial state in Redux?
Ans: In order to set the initial state in Redux, we have to pass the initial state as the second argument to createStore as shown below:
Eg: const rootReducer = combineReducers({
  todos: todos,
  visibilityFilter: visibilityFilter
});
const initialState = {
  todos: [{id:100, name:'ritik', completed: true}]
};
const store = createStore(
  rootReducer,
  initialState
);

6.What does the connect keyword do in react redux?
Ans: The connect() function connects a React component to a Redux store.
Connect accepts four different parameters, all optional. By convention, they are called:
A) mapStateToProps?: Function
B) mapDispatchToProps?: Function | Object
C) mergeProps?: Function
D) options?: Object
Syntax: function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

7.How can we access a redux store outside a react component?
Ans: To access redux store outside a react component we can use store.getState().
// Create a Redux store
export const store = createStore(reducer);
// Get the current state of the store
const state = store.getState();
// Access a specific piece of state
const value = state.someKey;

8.What are the things which we should never do inside a reducer?.
Ans: Things you should never do inside a reducer->
A) Mutate its arguments.
B) Perform side effects like API calls and routing transitions.
C) Call non-pure functions, e.g. Date. now() or Math. random().

9.What are middlewares in reducers? What are they used for? (Most asked interview question) Watch this video to understand
Ans: Middleware is some code you can put between the framework receiving a request, and the framework generating a response.
Redux Middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel the action. Middleware helps you with logging, error reporting, making asynchronous requests.

*/