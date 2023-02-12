/*
1. What is React? What are the advantages of using React , compared to normal Javascript?
Ans: React is an open-source javascript library which is used to build single-page applications.
Advantages of react compared to normal javascript are:
A) It uses virtual DOM for manipulation instead of actual DOM as they are less expensive.
B) It allows us to create re-usable component so, we won't have to repeat code.
C) It follows declerative approach (just describe the end result) instead of imperative approach.
D) It automatically updates UI based on updates within the component.

2. What is difference between library and framework? Is React a library or a framework? Explain the reason?
Ans: A library is a collection of function, classes etc that can be called to do the required operation to make development process easier. On the other hand framework is a collection of libraries. Framework have more stick rules or syntax for using them.
When we use library we decide when, where and how to call the library whereas when we use framework, framework is in charge. It provide us a place to plug in our code but it calls our code itself when it is needed.
In library we control the flow of the application but in framework, it controls the flow of the application.
React is a library. React provide us with lot of tools but we control the flow of the application and choose the tools to design the system for a specific project.

3. What is useState() in React? What does usestate return? What does it take as argument? Give code example of usestate?
Ans: useState() is a react hook that let us add state to a component. We use it to declare variables so that when it changes the component is re-rendered with the new state (value). This re-rendering helps us to update the UI accordingly.
The useState() returns us an array with exactly two values. First the current state and second is the function through which we can upadate the current state.
useState() takes initial state as an argument. If no initial state is set then default will be undefined.

4. What are state variables in react ? How are they different from normal variables? How do we decide when to use states and when to use normal variables?
Ans: State variable are declared by using useState() hook. State variable are the variables that preserve their state or value even after a component is re-rendered unlike normal variables that don't preserve their value afte a component is re-rendered.
In react we usually use state variables. When we want to preserve the value of a variable even after re-rendering we should use state variables.

5. What are keys in React? When should we use it? what is the advantage of keys?
Ans: A key is a special string attribute that we need to include when creating list or when we use map() to render a component. They help react to identify which items in list changed (updated or deleted). Each key attribute should be unique among siblings.

6.What is JSX? How does JSX work?
Ans: JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild() or createElement().
JSX is a syntactic sugar for React.createElemenent() function.

7. What is DOM? What is the virtual DOM? How does react use the virtual DOM to render the UI?
Ans: DOM stands for Document Object Model. DOM is a cross-platform interface that treats XML or HTML document as a tree stucture wherein each node is an object representing a part of the document. It basically represents the page, so that a script can change the document structure, style and content.
React uses VDOM or Virtual DOM which is like a light-weight copy of the actual DOM. Each object that exist in real DOM, there is a object present in VDOM.
DOM manipulation is an importaant part of web application but, it is slow and expensive taks because even if we want to update a small part in the DOM whole DOM is replaced. 
React uses two VDOMs to render UI. One is used to store the current state of the DOM and another to store previous state of the DOM. Whenever VDOM is updated react compares the two VDOMs then it gets to know which objects in VDOM are updated. After that react updates only those objects in the real DOM instead of rendering complete DOM. 

8.What are the differences between controlled and uncontrolled components? Design of controlled and unontrolled component and paste the code here?
Ans: A controlled Component is a component where the value of the input of the input filed is controlled by the react using value attribute and a onchange function, where in the case of the uncontrolled component the value of the input filed is not controlled by the react but instead accessed from the dom itself, we can use the useRef hook to achieve this.
A) Controlled Component->
function App() {
  const [input, setInput] = useState('');
  const updateInput = (e) => {
    setInput(e.target.value);
  }
  const onSubmitHandler = () => {
    alert(`This is your input: ${input}`);
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label>This is a controlled component</label>
      <input id='input' type='text' value={input} onChange={updateInput} />
      <button type='submit'>Submit</button>
    </form>
  );
}
B) Uncontrolled Component->
function App() {
  const inputRef = useRef('');
  const onSubmitHandler = () => {
    alert(`This is your input: ${inputRef.current.value}`)
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label>This is an uncontrolled component</label>
      <input id='input' type='text' ref='inputRef' />
      <button type='submit'>Submit</button>
    </form>
  );
}

*/