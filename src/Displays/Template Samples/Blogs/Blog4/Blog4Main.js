import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1, MainHeading1 } from '../../../../Component/Blocks';

import Container1 from '../../../../Component/Containers';

import StyluxStyledHeader1, {StyluxStyledFooter1 } from '../../../../Component/StyledContainers';

export default class Blog4Main extends Component {
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
                        Blog 4 Template
                </MainHeading1>
                </Container1>
                <StyluxStyledHeader1>

                </StyluxStyledHeader1>
                <Container1>
                
                </Container1>
                <StyluxStyledFooter1>

                </StyluxStyledFooter1>
            </section>
        )
    }
}