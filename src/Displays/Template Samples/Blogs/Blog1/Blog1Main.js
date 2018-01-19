import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import Container1, { Container2, Container3 } from '../../../../Components 1.0.0/Containers';
import Holder1, { Holder5, Holder10} from '../../../../Components 1.0.0/Holders';

import { StyluxStyledHeader3, StyluxStyledFooter3 } from '../../../../Components 1.0.0/StyledContainers';

import { SubNavbar1, H11, Navbar1, P2, HorizontalTestBlock1, Brand3 } from '../../../../Components 1.0.0/Blocks';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

export default class Blog1Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Blog 1 Template
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
                <StyluxStyledHeader3>
                    <Navbar1
                        align="flex-start"
                        navbarWidth="80%">
                        <Link to="">About</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                    </Navbar1>
                    <Navbar1
                        align="flex-end"
                        navbarWidth="20%">
                        <Link to="twitter.com/foxchrisrealthe"></Link>
                        <Link to="instagram.com"></Link>
                        <Link to="pinterest.com"></Link>
                        <Link to="bloglovin.com"></Link>
                        <Link to="linkedin.com"></Link>
                    </Navbar1>
                </StyluxStyledHeader3>
                <Container1>
                    <Holder5>
                        <Brand3>
                            {Logo}
                        </Brand3>
                        <p>Blog ticker holder place thing</p>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1
                        block1="1.5">
                        <Holder10
                            padding="25px"
                            alignBlock1="flex-end">
                            <p>left side</p>
                        </Holder10>
                        <Holder10
                            padding="25px"
                            alignBlock1="flex-start">
                            <p>right side</p>
                        </Holder10>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <p>Instgram title thing</p>
                        <p>social mediainstagram showcase</p>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <StyluxStyledFooter3>
                    <Navbar1
                        navbarWidth="60%">
                        <Link to="twitter.com/foxchrisrealthe">Twitter</Link>
                        <Link to="instagram.com">Instagram</Link>
                        <Link to="pinterest.com">Pinterest</Link>
                        <Link to="bloglovin.com">BlogLovin</Link>
                        <Link to="linkedin.com">Linkedin</Link>
                    </Navbar1>
                    <P2>
                        Copyright Statement. All rights reserved.
                    </P2>
                </StyluxStyledFooter3>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}