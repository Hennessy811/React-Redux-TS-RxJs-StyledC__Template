import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                {routes.map(route => (
                    <Route path={route.path} exact component={route.children} />
                ))}
            </Switch>
        </Router>
    );
};

export default process.env.NODE_ENV === "development" ? hot(App) : App;
