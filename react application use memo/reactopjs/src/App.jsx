import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodoElements = () => {
    setTodos([...todos, "New Data"]);
  };

  const expensiveCalculation = (num) => {
    for (let i = 0; i < 1000000000; i++) {
      num = num + 1;
    }
    return num;
  };

  let caculation = expensiveCalculation(count);
  return (
    <div className="container">
      <h2>The Todo elements are:</h2>
      {todos.map((element, idx) => (
        <p key={idx}>{element}</p>
      ))}
      <button onClick={addTodoElements}>Add Item</button>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <h1>Calculation</h1>
      <p>{caculation }</p>
    </div>
  );
}

export default App;
