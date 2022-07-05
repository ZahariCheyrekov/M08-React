import Counter from './components/Counter/Counter';
import CounIfno from './components/Counter/CountInfo';

import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

import AuthContext from './contexts/authContext';

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
        }, 1000);

    }, [count]);

    useEffect(() => {
        setInfo(oldState => ({
            ...oldState,
            hobbies: [...oldState.hobbies, 'running']
        }));
    }, []);

    return (
        <AuthContext.Provider value={count}>
            <div>
                <h2>{!name ? 'Loading...' : name}</h2>
                <Counter />

                {info.hobbies.map(h => <li key={uniqid()}>{h}</li>)}

                <button onClick={() => setCount(count + 1)}>+</button>
                <CounIfno />
            </div >
        </AuthContext.Provider>
    );
}

export default App;