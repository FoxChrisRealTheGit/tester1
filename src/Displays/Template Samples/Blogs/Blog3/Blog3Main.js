import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1, MainHeading1, SubNavbar2 } from '../../../../Component/Blocks';

import Container1 from '../../../../Component/Containers';

import { StyluxStyledHeader4, StyluxStyledFooter4 } from '../../../../Component/StyledContainers';

export default class Blog3Main extends Component {
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
                        Blog 3 Template
                </MainHeading1>
                </Container1>
                <Container1>
                    <SubNavbar2>
                        <Link to="">Info</Link>
                        <Link to="">Shop</Link>
                        <Link to="">I</Link>
                        <Link to="">T</Link>
                        <Link to="">P</Link>
                        <Link to="">F</Link>
                        <Link to="">Y</Link>
                    </SubNavbar2>
                </Container1>
                <StyluxStyledHeader4>

                </StyluxStyledHeader4>
                <Container1>
                </Container1>
                <StyluxStyledFooter4>

                </StyluxStyledFooter4>
            </section>
        )
    }
}