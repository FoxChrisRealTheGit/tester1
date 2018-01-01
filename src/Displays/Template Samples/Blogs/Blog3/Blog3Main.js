import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import { SubNavbar1, MainHeading1, Navbar1, Paragraph2 } from '../../../../Components 1.0.0/Blocks';

import Container1 from '../../../../Components 1.0.0/Containers';

import { StyluxStyledHeader4, StyluxStyledFooter4 } from '../../../../Components 0.5.0/StyledContainers';

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
                    <SubNavbar1>
                        <Link to="">used</Link>
                        <Link to="">to</Link>
                        <Link to="">be</Link>
                        <Link to="">two</Link>
                        <Link to="">P</Link>
                        <Link to="">F</Link>
                        <Link to="">Y</Link>
                    </SubNavbar1>
                </Container1>
                <StyluxStyledHeader4>
                    <Navbar1>
                        <Link to="">Beauty</Link>
                        <Link to="">Fashion</Link>
                        <Link to="">Travel</Link>
                        <Link to="">Recipes</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Your Name</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Vids</Link>
                        <Link to="">Shop</Link>
                        <Link to="">Contact</Link>
                    </Navbar1>
                </StyluxStyledHeader4>
                <Container1>
                </Container1>
                <StyluxStyledFooter4>
                    <Navbar1>
                        <Link to="">I</Link>
                        <Link to="">T</Link>
                        <Link to="">B</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">Your Name</Link>
                    </Navbar1>
                    <Navbar1>
                        <Link to="">P</Link>
                        <Link to="">F</Link>
                        <Link to="">Y</Link>
                    </Navbar1>
                    <Paragraph2>
                        Copyright statement. All Rights Reserved.
                    </Paragraph2>
                </StyluxStyledFooter4>
            </section>
        )
    }
}