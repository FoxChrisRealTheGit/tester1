import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1, MainHeading1, CircleImage2, Navbar4, Paragraph6 } from '../../../../Component/Blocks';

import Container1 from '../../../../Component/Containers';

import { StyluxStyledHeader5 } from '../../../../Component/StyledContainers';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

export default class Blog5Main extends Component {
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
                        Blog 5 Template
                    </MainHeading1>
                </Container1>
                <StyluxStyledHeader5>
                    <CircleImage2>
                        {Logo}
                    </CircleImage2>
                    <Navbar4>
                        <Link to="">About</Link>
                        <Link to="">Adventure</Link>
                        <Link to="">Climb</Link>
                        <Link to="">Eat</Link>
                        <Link to="">Contact</Link>
                        <Link to="">Disclaimer</Link>
                    </Navbar4>
                    <Paragraph6>
                        copyright info
                    </Paragraph6>
                </StyluxStyledHeader5>
                <Container1>

                </Container1>
            </section>
        )
    }
}