import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1, MainHeading1 } from '../../../../Component/Blocks';

import Container1 from '../../../../Component/Containers';

import { StyluxStyledHeader2, StyluxStyledFooter2 } from '../../../../Component/StyledContainers';

export default class Blog2Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/templatesamples/blog1">blog 1</Link>
                    <Link to="/templatesamples/blog2">blog 2</Link>
                    <Link to="/templatesamples/blog3">blog 3</Link>
                    <Link to="/templatesamples/blog4">blog 4</Link>
                    <Link to="/templatesamples/blog5">blog 5</Link>
                </SubNavbar1>
                <Container1>
                    <MainHeading1>
                        Blog 2 Template
                    </MainHeading1>
                </Container1>
                <StyluxStyledHeader2>
                </StyluxStyledHeader2>
                <Container1>
                </Container1>
                <StyluxStyledFooter2>
                </StyluxStyledFooter2>
            </section>
        )
    }
}