import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../../Navigation';

import Container1 , {Container2, Container3}from '../../../../Component/Containers';

import {StyluxStyledHeader3, StyluxStyledFooter3} from '../../../../Component/StyledContainers';

import { SubNavbar1, MainHeading1 } from '../../../../Component/Blocks';

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
                </StyluxStyledHeader3>
                <Container3>

                </Container3>
                <Container2>
                    
                </Container2>
                <Container3>

                </Container3>
                <StyluxStyledFooter3>
                </StyluxStyledFooter3>
            </section>
        )
    }
}