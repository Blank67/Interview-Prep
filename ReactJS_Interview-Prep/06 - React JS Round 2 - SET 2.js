/*
1.What is the virtual DOM? How does react use the virtual DOM to render the UI?
Ans: React uses VDOM or Virtual DOM which is like a light-weight copy of the actual DOM. Each object that exist in real DOM, there is a object present in VDOM.
DOM manipulation is an importaant part of web application but, it is slow and expensive taks because even if we want to update a small part in the DOM whole DOM is replaced. 
React uses two VDOMs to render UI. One is used to store the current state of the DOM and another to store previous state of the DOM. Whenever VDOM is updated react compares the two VDOMs then it gets to know which objects in VDOM are updated. After that react updates only those objects in the real DOM instead of rendering complete DOM. 


2. What are the differences between controlled and uncontrolled components?
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

3. Explain about types of side effects in React component.
Ans: A React side-effect occurs when we use something that is outside the scope of React.js in our React components e.g. the Browser APIs like localStorage.
There are two types of side effects in react:
A) Without cleanup: This side effect will be used in useEffect. A few common examples are network requests, Logging, manual DOM mutations, etc.
B) With cleanup: Some of the Hook effects will require the cleanup after updating of DOM is done. Eg: we can return a cleanup function in useEffect().

4. Can useeffect return anything? When is the return function of useffect called ?
Ans: useEffect can return either a function or undefined. If it return a function it is called a cleanup function and whenever useEffect runs again it will first run the cleanup function. 

5.What are the different ways to style a React component which you know?
Ans: There are many ways to style a react component. Some of them are->
A) Inline Styling: Using style attribute
B) Using JS objects: We can crate a seperate object that set desired style properties
C) Using CSS stylesheets: We can create a seperate CSS file and then import it in our component
D) Using CSS modules: We can create a seperate CSS modlue file with extention .module.css and import it on our component

*/