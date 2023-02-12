/*
1.What is reconciliation in React? Write in your own words.
Ans: The mechanism of diffing one tree with another to determine which parts are required to be changed and then update the original DOM with it is called Reconciliation in react.


2.What are fragments? How are they better than other div elements? Check this out for reference.
Ans: It's a common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
Since, it doesn't create ant extra element into the DOM so, we avoid creating unnecessary divs. Hence, avoiding div soup.

3. What element get introduced into the DOM when we use fragments? How does it work?
Ans: No additional element is created into the DOM when we use fragments.

4. What are the advantages of React compared to Vanilla JS?
Ans: Advantages of react compared to normal javascript are:
A) It uses virtual DOM for manipulation instead of actual DOM as they are less expensive.
B) It allows us to create re-usable component so, we won't have to repeat code.
C) It follows declerative approach (just describe the end result) instead of imperative approach.
D) It automatically updates UI based on updates within the component.

5. Why React uses className over class attribute?
Ans: Becaue class is a reserved JS keywork.

6.What is children prop? When should we use it ? Give an example to explain it
Ans: props.children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags of the react wrapper component.
We can use this to create reusable UI components.
Eg: function App() {
    return (
        <Card>
            <h1>Hi welcome</h1>
            <div>This is div</div>
            <span>This is span</span>
        </Card>
    );
}
export default App;
const Card = (props) => {
    return (
        <div className="card">{props.children}</div>
    )
}

*/