import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AppComponent from '../app/index';
import BreadCrumb from '../app/breadcrumbs/index';

export const NotFound = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/youtube">Youtube</Link>
                </li>
                <li>
                    <Link to="/breadcrumb">BreadCrumb</Link>
                </li>
            </ul>
        </div>
    );
};


const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={() => <NotFound /> }></Route>
            <Route exact path="/youtube" component={() => <AppComponent /> }></Route>
            <Route exact path="/breadcrumb" component={() => <BreadCrumb /> }></Route>
        </Switch>
    </Router>
)
export default Routes;