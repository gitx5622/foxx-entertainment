import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import {Helmet} from "react-helmet";
import TopBar from "./TopBar";

const DashboardFoxx = () => {
    return (
        <Fragment>
            <Helmet>
                <title>FOXX ENTERTAINMENT || HOME</title>
            </Helmet>
            <header>
                <TopBar/>
            </header>
            <main className="main-content">

            </main>
        </Fragment>
    )
};

export default withRouter(DashboardFoxx);