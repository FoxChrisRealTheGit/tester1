import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';
import FooterNavigation from '../../../FooterNavigation';

import { SubNavbar1, H11, CircleImage, Navbar1, P1, HorizontalTestBlock1 } from '../../../../Components 1.0.0/Blocks';

import Container1 from '../../../../Components 1.0.0/Containers';

import { StyluxStyledHeader5 } from '../../../../Components 1.0.0/StyledContainers';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

export default class Blog5Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Blog 5 Template
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
                
                <StyluxStyledHeader5>
                    <CircleImage>
                        {Logo}
                    </CircleImage>
                    <Navbar1>
                        <Link to="">About</Link>
                        <Link to="">Adventure</Link>
                        <Link to="">Climb</Link>
                        <Link to="">Eat</Link>
                        <Link to="">Contact</Link>
                        <Link to="">Disclaimer</Link>
                    </Navbar1>
                    <P1>
                        copyright info
                    </P1>
                </StyluxStyledHeader5>
                <Container1>

                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}