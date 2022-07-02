import React from 'react';

function Counter() {
    let [count, updateCounter] = React.useState(0);

    return (
        <>
            <p>Current count: {count}</p>
            <button onClick={() => updateCounter(count => count + 1)}>Increment</button>
        </>
    );
}

export default Counter;