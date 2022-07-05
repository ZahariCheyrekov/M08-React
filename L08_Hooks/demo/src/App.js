import Counter from './components/Counter';
import { useState } from 'react';

function App() {
   const [count, setCount] = useState(0);

   return (
      <div>
         <Counter count={count} />
         <button onClick={() => setCount(count + 1)}>+</button>
      </div>
   );
}

export default App;