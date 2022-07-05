import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(response => {
                setState(response.results);
            });
    }, []);

    return state;
}

export default useFetch;