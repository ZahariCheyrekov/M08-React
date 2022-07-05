import AuthContext from '../../contexts/authContext';
import { useContext } from 'react';

const CounIfno = () => {
    const count = useContext(AuthContext);

    return (
        <p>Count Info: {count}</p>
    );
}

export default CounIfno;