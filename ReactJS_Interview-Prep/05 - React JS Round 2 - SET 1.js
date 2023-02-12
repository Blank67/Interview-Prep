/*
1.What is React Router?When should we use it?Give code example and explain it in detail.
Ans: React Router refers to the standard library used for routing in React. It allow us for building a single-page web application in React with navigation without even refreshing the page when the user navigates. It also allows to change the browser URL and will keep the user interface in sync with the URL.
Eg: <Route path="/about" component={About} /> 

2. How to pass data between sibling components using React router?
Ans: Passing data between sibling components of React is possible using React Router with the help of history.push and match.params.

3. What is useCallback? When should we use it?
Ans: useCallback is a react hook used to restrict creation of a new function object whenever the component re-renders unless the dependencies changes.
It is used to optimize our code for faster loading.

4. What does useMemo do? Give code example to explain when will you use it.
Ans: useMemo() help us to cache the result of a computation between re-renders.
It returns a memoized value. We use useMemo() to optimize our code for faster loading.
Eg: function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return (
    <Fragment>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => <p key={index}>{todo}</p>)}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>Increase</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </Fragment>
  );
}

5. Difference between React.memo and useMemo.?
Ans: React.memo() is a higher-order component that prevents a component from re-rendering if the props (or values within it) have not changed.
While useMemo() is a hook that is used to cache the result of a computation between re-renders.

6. What is the use of context API ? When should we use it? How does Context Api work?
Ans: The Context API helps share data between components (globally) which you can't easily share with props (without creating props-chain).
Context API is generally used for authentication status, theme, user language etc.
We use React.createContext() to create a context. It return us consumer and a provider. Provider just provide state to it's children and consumer is a component that uses that state. We use useContext() hooks to access data stored in context API.

7. What is the use of babel ?
Ans: Babel is a JS transpiler that is used to transform the JSX code to browser understandable syntax.

*/