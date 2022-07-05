import Counter from './components/Counter';
import { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {

    setTimeout(() => {
      setName('Atlas');
    }, 1000);

  }, []);

  return (
    <div>
      <h2>{!name ? 'Loading...' : name}</h2>
      <Counter count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;