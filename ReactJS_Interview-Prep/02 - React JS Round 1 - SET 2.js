/*
1.What are props in React? What is the difference between React state and props.
Ans: Props are arguments passed into react components. Since components are like a function we can think props as an argument of that component. Props are used to pass data from parent component to child component. The component receives props object that have al the data passed to it.
The difference between props and state is that props are immutable and states can be muted, props can be passed from one component to another, whereas state is component specific.

2. What is prop drilling in React? What are the better ways to prevent prop drilling which you know?
Ans: Prop drilling is a phenomenon, where the data is passed from one component to another which are not directly related (don't have direct parent-child relationship), through various other components which don't require that data.
Better ways to prevent prop drilling are: Context API, Redux.

3.What are error boundaries? How is the error boundary different from other components?
Ans: Error boundaries are react component that catch JS error thrown anywhere in their child component and display a fallback UI instead of crashing the component tree.
Error boundary is different from other components as they render only when the catch an error.

4.What are React Hooks?How are hooks different from normal functions?
Ans: React hooks are functions that let us "hook on" or store the value or state or lifecycle of the component. They can't be used in class components.
In react the normal function will gets created everytime the component re-renders whereas a hook maintains its state unless updated.

5. What are the 2 rules that must be followed while using React Hooks? What is the reason behind such rules?
Ans: A) It should be called at the top-level of the component.
B) It can only be called in a function component.

6. When does a functional component rerender?(Explain lifecycle of functional components?) Watch this video---> Favourite interview Question
Ans: A functional component is redered at the mounting phase. There are four phases in a lifecycle of a functional component.
A) Initialization: In this, react will prepare initial states, default props.
B) Mounting: It refer to putting element in DOM. This phase includes methods like componentWillMount and componentDidMount.
C) Updating: In this, components are updated if their state or props change. It includes methods like componentWillUpdate, shouldComponentUpdate, render, and componentDidUpdate.
D) Unmounting: This is the last phase of the lifecycle, it means removing component from the DOM. This phase includes methods like componentWillUnmount.

7. When does the return statement of a functional component get called?
Ans: When the functional component is called. Usually they are called in the initialization phase.

8. What is the use of useEffect React Hooks? When does the useEffect hook get called in the lifecycle of react functional components?
Ans: The useEffect hook is used to perform side-effects in a functional component. useEffect is called everytime a component is mounted and we can also configure exactly when it should get called.
We can configue it to run in all the phases of the lifecycle.

9.What are the 2 arguments of useEffect hook? Explain each one of them with code example.
Ans: useEffect takes two arguments- callback function and dependencies array. The useEffect is called at mounting and then whenever value of the dependencies change.
Eg: function App() {
  const [input, setInput] = useState('');
  const updateInput = (e) => {
    setInput(e.target.value);
  }
  const onSubmitHandler = () => {
    alert(`This is your input: ${input}`);
  }
  useEffect(() => { //This will run at the mounting only as there are no dependencies
    console.log('Use Effect ran.');
  }, []);
  useEffect(() => { ////This will run at the mounting and whenever value of input changes
    console.log(`Value from useEffect: ${input}`);
  }, [input])
  return (
    <form onSubmit={onSubmitHandler}>
      <label>This is a controlled component</label>
      <input id='input' type='text' value={input} onChange={updateInput} />
      <button type='submit'>Submit</button>
    </form>
  );
}

*/