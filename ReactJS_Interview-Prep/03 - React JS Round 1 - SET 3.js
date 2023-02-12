/*
1.What are the different ways to style a React component?
Ans: There are many ways to style a react component. Some of them are->
A) Inline Styling: Using style attribute
B) Using JS objects: We can crate a seperate object that set desired style properties
C) Using CSS stylesheets: We can create a seperate CSS file and then import it in our component
D) Using CSS modules: We can create a seperate CSS modlue file with extention .module.css and import it on our component

2.Name a few techniques to optimize React app performance? Explain with code examples.
Ans: Some of the techniques to optimize react app are->
A) Using useMemo(): This help us to cache the result of a computation between re-renders.
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
B) Using useCallback(): It works same as useMemo() but instead of computation it stores function. As we know functions are reference type so as soon as component re-renders a new function is created eventhough the function is same which reduces our app performance.
C) Lazy loading: It is method to reduce load time of our react app. As it will only load our code when needed.
Eg: Consider we have two pages and user is on page 1, we don't need to import or load our code for page 2 until and unless user opens it. We can acheive this using lazy loading.

3. What is the way for Parent to Child Communication? Give code example.
Ans: We can pass data or communicate from parent to child using props.
Eg: function ParentComponent(props) {
    const [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);
    return (
        <div>
            <button onClick={increment}>Increment Counter</button>
            <ChildComponent counterValue={counter} />
        </div>
    );
}

4. What are the ways to communicate from child to parent? Give code example.
Ans: We can communicate by using callbacks.
Eg: function ParentComponent(props) {
    let [counter, setCounter] = useState(0);
    let callback = valueFromChild => setCounter(valueFromChild);
    return (
        <div>
            <p>Value of counter: {counter}</p>
            <ChildComponent callbackFunc={callback} counterValue={counter} />
        </div>
    );
}
function ChildComponent(props) {
    let childCounterValue = props.counterValue;
    return (
        <div>
            <button onClick={() => props.callbackFunc(++childCounterValue)}>
                Increment Counter
            </button>
        </div>
    );
}

5. What are the way to communicate between sibling components?
Ans: We can communicate between sibling by using prop-chain, context API, redux etc.

6. What are Higher Order Components in React?Watch this video and explain with code example. (Favourite Interview Question)
Ans: High order components are those components that takes in a component and return a new component.
Eg: HOC->
const HOC = (WrapperComponent, entity) => {
    return class extends React.Component {
        state = {
            data: [],
            term: ''
        }
        componentDidMount() {
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
                const json = await res.json();
                this.setState({ ...this.state, data: json })
            }
            fetchData();
        }
        render() {
            const { term, data } = this.state;
            const filteredData = data.filter((ele) => {
                if (entity === 'users') {
                    const { name } = ele;
                    return name.indexOf(term) >= 0;
                } else if (entity === 'todos') {
                    const { title } = ele;
                    return title.indexOf(term) >= 0;
                }
            });
            return (
                <div>
                    <h2>{entity}</h2>
                    <input type={'text'} value={term} onChange={(e) => this.setState({ ...this.state, term: e.target.value })} />
                    <WrapperComponent data={filteredData} />
                </div>
            );
        }
    }
}
export default HOC;
TODOS->
const TodoList = ({data}) => {
    const renderTodos = data.slice(0,10).map((todo) => {
        return (
            <div key={todo.id}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        );
    })
    return(
        <div>{renderTodos}</div>
    );
}
const SearchTodos = HOC(TodoList,'todos');
export default SearchTodos;

7. What are the different phases of the component lifecycle? With a small code example explain the different stages when they happen
Ans: A) Initialization: In this, react will prepare initial states, default props.
B) Mounting: It refer to putting element in DOM. This phase includes methods like componentWillMount and componentDidMount.
C) Updating: In this, components are updated if their state or props change. It includes methods like componentWillUpdate, shouldComponentUpdate, render, and componentDidUpdate.
D) Unmounting: This is the last phase of the lifecycle, it means removing component from the DOM. This phase includes methods like componentWillUnmount.

8. What are custom hooks in react? Can you design one? Watch this video to understand it better (Favourite interview question)
Ans: A Custom Hook is a function (created by users) in Javascript whose name begins with ‘use’ and which calls other hooks.
Eg: Here we created a useFetch hook that takes a url and return the data in an array.
const useFetch = (url) => {
    const [data, setData] = useState(null);
    useEffect(async () => {
        const response = await fetch(url);
        const transFormData = response.json();
        setData(transFormData);
    }, [url]);
    return [data];
};
export default useFetch;

*/