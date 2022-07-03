import Home from './Home';
import Login from './Login';
import Register from './Register';
import CreateGame from './CreateGame';
import EditGame from './EditGame';
import GameDetails from './GameDetails';
import GameCatalog from './GameCatalog';

import { Route, Switch } from 'react-router-dom';

const Main = () => {
    return (
        <main id="main-content">
            <Switch>
                <Route path={"/"} exact component={Home} />
                <Route path={"/login"} component={Login} />
                <Route path={"/register"} component={Register} />
                <Route path={"/edit"} component={EditGame} />
                <Route path={"/catalog"} component={GameCatalog} />
                <Route path={"/create"} component={CreateGame} />
            </Switch>
        </main>
    );
}

export default Main;