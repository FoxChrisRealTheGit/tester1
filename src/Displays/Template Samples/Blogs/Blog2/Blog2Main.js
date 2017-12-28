import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1, MainHeading1, Navbar2, Navbar5, Paragraph1 } from '../../../../Component/Blocks';

import Container1 from '../../../../Component/Containers';

import { StyluxStyledHeader2, StyluxStyledFooter2 } from '../../../../Component/StyledContainers';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

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
                    {Logo}
                    <Link to="">Contact us</Link>
                    <Navbar2>
                        <Link to="">News</Link>
                        <Link to="">Video</Link>
                        <Link to="">Events</Link>
                        <Link to="">Stuff</Link>
                    </Navbar2>
                    <Navbar2>
                        <Link to="">F</Link>
                        <Link to="">T</Link>
                        <Link to="">P</Link>
                        <Link to="">I</Link>
                    </Navbar2>
                </StyluxStyledHeader2>
                <Container1>
                </Container1>
                <StyluxStyledFooter2>
                    <Navbar5>
                        <Link to="">news</Link>
                        <Link to="">video</Link>
                        <Link to="">events</Link>
                        <Link to="">base</Link>
                        <Link to="">store</Link>
                    </Navbar5>
                    <Navbar5>
                        <Link to="">staff</Link>
                        <Link to="">contact us</Link>
                        <Link to="">advertise</Link>
                        <Link to="">send a tip</Link>
                        <Link to="">activations blog</Link>
                    </Navbar5>
                    <Navbar5>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                    </Navbar5>
                    <Navbar2>
                        <Link to="">f</Link>
                        <Link to="">t</Link>
                        <Link to="">g</Link>
                        <Link to="">in</Link>
                        <Link to="">Y</Link>
                    </Navbar2>
                    <Navbar2>
                        <Link to="">app</Link>
                        <Link to="">app</Link>
                        <Link to="">app</Link>
                    </Navbar2>
                    <Paragraph1>
                        Subscribe>
                    </Paragraph1>
                </StyluxStyledFooter2>
            </section>
        )
    }
}