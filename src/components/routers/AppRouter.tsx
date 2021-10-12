import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { LoginView } from '../auth/LoginView';
import { DashBoardRoutes } from './DashBoardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    {/* Ruta Publica */}
                    <Route exact path="/login" component={LoginView}/>

                    {/* Ruta Privada */}
                    <Route path="/" component={DashBoardRoutes}/>

                </Switch>
            </div>
        </Router>
    )
}
