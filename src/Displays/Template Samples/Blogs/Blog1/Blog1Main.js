import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import Container1 , {Container2, Container3}from '../../../../Component/Containers';

import {StyluxStyledHeader3, StyluxStyledFooter3} from '../../../../Component/StyledContainers';

import { SubNavbar1, MainHeading1, Navbar3, Navbar2, Brand4, Navbar1, Paragraph2 } from '../../../../Component/Blocks';

import Logo from '../../../../images/Logo/QuickFirstDraft.svg';

export default class Blog1Main extends Component {
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
                        Blog 1 Template
                    </MainHeading1>
                </Container1>
                <StyluxStyledHeader3>
                    <Navbar2>
                        <Link to="">About</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                        <Link to="">Link</Link>
                    </Navbar2>    
                    <Navbar3>
                    <Link to="">T</Link>
                    <Link to="">I</Link>
                    <Link to="">P</Link>
                    <Link to="">IN</Link>
                    </Navbar3>
                </StyluxStyledHeader3>
                <Container3>
                    <Brand4>
                        {Logo}
                    </Brand4>

                </Container3>
                <Container2>
                    
                </Container2>
                <Container3>

                </Container3>
                <StyluxStyledFooter3>
                    <Navbar1>
                        <Link to="">Twitter</Link>
                        <Link to="">Instagram</Link>
                        <Link to="">Pinterest</Link>
                        <Link to="">Bloglovin</Link>
                        <Link to="">Linkedin</Link>
                    </Navbar1>
                    <Paragraph2>
                        Copyright Statement. All rights reserved.
                    </Paragraph2>
                </StyluxStyledFooter3>
            </section>
        )
    }
}