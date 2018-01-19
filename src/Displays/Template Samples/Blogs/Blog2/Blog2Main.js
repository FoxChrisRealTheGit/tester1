import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import { SubNavbar1, H11, Navbar1, P1, HorizontalTestBlock1 } from '../../../../Components 1.0.0/Blocks';

import Container1 from '../../../../Components 1.0.0/Containers';

import { StyluxStyledHeader2, StyluxStyledFooter2 } from '../../../../Components 1.0.0/StyledContainers';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

export default class Blog2Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Blog 2 Template
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/templatesamples/blog1">blog 1</Link>
                    <Link to="/templatesamples/blog2">blog 2</Link>
                    <Link to="/templatesamples/blog3">blog 3</Link>
                    <Link to="/templatesamples/blog4">blog 4</Link>
                    <Link to="/templatesamples/blog5">blog 5</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <StyluxStyledHeader2>
                    {Logo}
                    <Link to="">Contact us</Link>
                    <Navbar1
                        align="flex-start"
                        navbarWidth="70%">
                        <Link to="">News</Link>
                        <Link to="">Video</Link>
                        <Link to="">Events</Link>
                        <Link to="">Stuff</Link>
                    </Navbar1>
                    <Navbar1
                        navbarWidth="70%"
                        align="flex-end">
                        Follow Us:
                        <Link to="facebook.com"></Link>
                        <Link to="twitter.com"></Link>
                        <Link to="pinterest.com"></Link>
                        <Link to="instagram.com"></Link>
                    </Navbar1>
                </StyluxStyledHeader2>
                <HorizontalTestBlock1 />
                <Container1>
                </Container1>
                <StyluxStyledFooter2>
                    <Navbar1
                        direction="column">
                        <Link to="">news</Link>
                        <Link to="">video</Link>
                        <Link to="">events</Link>
                        <Link to="">base</Link>
                        <Link to="">store</Link>
                    </Navbar1>
                    <Navbar1
                        direction="column">
                        <Link to="">staff</Link>
                        <Link to="">contact us</Link>
                        <Link to="">advertise</Link>
                        <Link to="">send a tip</Link>
                        <Link to="">activations blog</Link>
                    </Navbar1>
                    <Navbar1
                        direction="column">
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                        <Link to="">country</Link>
                    </Navbar1>
                    <Navbar1
                        navbarWidth="50%">
                        <Link to="facebook.com"></Link>
                        <Link to="twitter.com"></Link>
                        <Link to="plus.google.com"></Link>
                        <Link to="linkedin.com"></Link>
                        <Link to="youtube.com"></Link>
                    </Navbar1>
                    <Navbar1
                        navbarWidth="50%">
                        <Link to="">app</Link>
                        <Link to="">app</Link>
                        <Link to="">app</Link>
                    </Navbar1>
                    <P1>
                        Subscribe
                    </P1>
                    <p>copyright 2018</p>
                </StyluxStyledFooter2>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}