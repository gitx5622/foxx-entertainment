import React, {Fragment} from "react";

const TopBar = ({history, location}) => {
    return (
        <Fragment>
            <div className="dashboard-topbar">
                <div className="left-section">
                    <aside className="business-brand"
                           onClick={() => { history.push("/");
                           document.querySelector(".main-content") &&
                           document.querySelector(".main-content").scroll({top: 0})
                           }}>
                        <img alt="foxx logo" src="/images/logo.png"/>
                    </aside>
                </div>
                <div className="right-section">

                </div>
            </div>
        </Fragment>
    )
};

export default TopBar;