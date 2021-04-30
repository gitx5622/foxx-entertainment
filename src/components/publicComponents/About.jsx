import React, {Fragment} from 'react';
import { Helmet } from 'react-helmet';

import "../../styles/brandComponents.scss";

const About = () => {
    return (
        <Fragment>
            <Helmet>
                <title>FOXX ENT | About Us</title>
                <meta
                    name="description"
                    content="At Foxx Entertainment, we ensure that all latest series and movies are available to customers"
                />
                <meta
                    name="og:description"
                    content="At Foxx Entertainment, we ensure that all latest series and movies are available to customers"
                />
            </Helmet>
            <div className="about-title">
                <h1>Foxx Entertainment About Us Page</h1>
            </div>

        </Fragment>
    )
};

export default About;