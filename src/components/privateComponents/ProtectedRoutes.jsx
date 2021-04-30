import React, {Fragment} from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import DashboardFoxx from "./dashboardFoxx";
import About from "../publicComponents/About";

const ProtectedRoutes = ({ location }) => {

    const brandPage =
        location.pathname === "/" ||
        location.pathname === "/about" ||
        location.pathname === "/contact";

    const userPage =
        location.pathname === "/user/login" ||
        location.pathname === "/user/register";

    return (
        <Fragment>
            <Helmet>
                <title>Foxx Ent | Home of Movies and Series</title>
            </Helmet>
            <Fragment>
                {userPage ? (
                    <div className="content-section">
                        <Switch>
                            <Route exact path="/user/login" render={() => <About/>}/>
                        </Switch>
                    </div>
                ): brandPage === true ? (
                    <div className="unprotected-routes-wrapper">
                        <div className="content-section" id="content-section">
                            <div id="main-scrollable">
                                <Switch>
                                    <Route exact path="/" render={() => <DashboardFoxx />} />
                                    <Route exact path="/about" render={() => <About />} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                ): (
                    <Switch>
                        <Redirect to="/"/>
                    </Switch>
                )}
            </Fragment>
        </Fragment>
    )
};

export default withRouter(ProtectedRoutes);