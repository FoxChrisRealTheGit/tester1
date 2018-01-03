import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import { SubNavbar1, MainHeading1, Navbar1, Paragraph2 } from '../../../../Components 1.0.0/Blocks';

import Container1 from '../../../../Components 1.0.0/Containers';

import StyluxStyledHeader1, { StyluxStyledFooter1 } from '../../../../Components 1.0.0/StyledContainers';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

export default class Blog4Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <MainHeading1>
                        Blog 4 Template
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/templatesamples/blog1">blog 1</Link>
                    <Link to="/templatesamples/blog2">blog 2</Link>
                    <Link to="/templatesamples/blog3">blog 3</Link>
                    <Link to="/templatesamples/blog4">blog 4</Link>
                    <Link to="/templatesamples/blog5">blog 5</Link>
                </SubNavbar1>
                <Container1>
                    <StyluxStyledHeader1>
                        {Logo}
                        <Navbar1>
                            <Link to="">Blog</Link>
                            <Link to="">Resources</Link>
                            <Link to="">Guides</Link>
                            <Link to="">Tools</Link>
                            <Link to="">About</Link>
                        </Navbar1>
                        <Navbar1>
                            <Link to="">Stuff</Link>
                            <Link to="">More Stuff</Link>
                        </Navbar1>
                    </StyluxStyledHeader1>
                </Container1>
                <Container1>

                </Container1>
                <StyluxStyledFooter1>
                    <Navbar1>
                        <Link to="">Blog</Link>
                        <Link to="">Resources</Link>
                        <Link to="">Guides</Link>
                        <Link to="">Tools</Link>
                        <Link to="">About</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Guides</Link>
                        <Link to="">one</Link>
                        <Link to="">two</Link>
                        <Link to="">three</Link>
                        <Link to="">four</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Reviews</Link>
                        <Link to="">one</Link>
                        <Link to="">two</Link>
                        <Link to="">three</Link>
                        <Link to="">four</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Comparison</Link>
                        <Link to="">one</Link>
                        <Link to="">two</Link>
                        <Link to="">three</Link>
                        <Link to="">four</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Let us help you</Link>
                    </Navbar1>
                    <Navbar1>
                        <p>Copyright 2017</p>
                        <Link to="">Moar Guides and stuff</Link>
                        <Link to="">Privacy Policy</Link>
                        <Link to="">Terms & Conditions</Link>
                        <Link to="">Contact</Link>
                    </Navbar1>
                    <Paragraph2>
                        some super long string about this company and why it does what it does and stuff.
                    </Paragraph2>
                    <Navbar1>
                        <Link to="">one</Link>
                        <Link to="">two</Link>
                        <Link to="">three</Link>
                        <Link to="">four</Link>
                    </Navbar1>
                </StyluxStyledFooter1>

                <FooterNavigation />
            </section>
        )
    }
}