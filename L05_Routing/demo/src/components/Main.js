import Home from './Home';
import Login from './Login';
import Register from './Register';
import CreateGame from './CreateGame';
import EditGame from './EditGame';
import GameDetails from './GameDetails';
import GameCatalog from './GameCatalog';

const Main = () => {
    return (
        <main id="main-content">
            <Home />

            <Login />

            <Register />

            <CreateGame />

            <EditGame />

            <GameDetails />

            <GameCatalog />
        </main>
    );
}

export default Main;