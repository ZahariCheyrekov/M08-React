import Counter from './components/Counter';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function App() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState({
        name: 'Atlas',
        age: 1000,
        hobbies: ['studying', 'exercising', 'reading']
    });

    useEffect(() => {
        setTimeout(() => {
            setName('Atlas');

            setInfo(oldState => ({
                ...oldState,
                hobbies: [...oldState.hobbies, 'running']
            }));
        }, 1000);
    }, [count]);

    return (
        <div>
            <h2>{!name ? 'Loading...' : name}</h2>
            <Counter count={count} />
            {info.hobbies.map(h => <li key={uniqid()}>{h}</li>)
            }
            <button onClick={() => setCount(count + 1)}>+</button>
        </div >
    );
}

export default App;