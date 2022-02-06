import Headerr from './components/Header'
import Hia from './components/Header2'
import React, { useState, useEffect } from 'react';


function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/stuff')

      const data = await res.json()

      return data

    }

    fetchTasks()

  }, [])






  return (
    <div className="container">
      <Headerr title='Hellor' />
      <Hia name="Taylor" />
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
