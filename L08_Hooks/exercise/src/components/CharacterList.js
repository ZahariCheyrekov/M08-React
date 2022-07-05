import uniqid from 'uniqid';

const CharacterList = () => {
    const characters = useFetch('https://swapi.dev/api/people');

    return (
        <ul>
            {characters.map(x => <li key={uniqid}>{x}</li>)}
        </ul>
    );
}

export default CharacterList;