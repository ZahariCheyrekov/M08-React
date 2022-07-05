import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';

const Counter = () => {
    const count = useContext(AuthContext);
    
    return (
        <p>Current count: {count}</p>
    );
}

export default Counter;