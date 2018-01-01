import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation';

import {
    MainHeading1,
    SubNavbar1,
    Heading1,
    SubHeading4,
    HorizontalTestBlock1
} from '../../Components 1.0.0/Blocks';

import StyluxStyledHeader1,
{
    StyluxStyledHeader2,
    StyluxStyledHeader3,
    StyluxStyledHeader4,
    StyluxStyledHeader5,
    StyluxStyledFooter1,
    StyluxStyledFooter2,
    StyluxStyledFooter3,
    StyluxStyledFooter4,
    StyluxStyledFooter5
} from '../../Components 0.5.0/StyledContainers';

import Container1, { Container3 } from '../../Components 1.0.0/Containers';

export default class StyledContainerMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/containers/styled">styled containers</Link>
                    <Link to="/containers/unstyled">unstyled containers</Link>
                    <Link to="/holders">holders</Link>
                </SubNavbar1>
                <Container1>
                    <MainHeading1>
                        Pre Styled Containers
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Headers
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Header 1
                    </SubHeading4>
                    <StyluxStyledHeader1>
                    </StyluxStyledHeader1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Header 2
                    </SubHeading4>
                    <StyluxStyledHeader2>
                    </StyluxStyledHeader2>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Header 3
                    </SubHeading4>
                    <StyluxStyledHeader3>
                    </StyluxStyledHeader3>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Header 4
                    </SubHeading4>
                    <StyluxStyledHeader4>
                    </StyluxStyledHeader4>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Header 5
                    </SubHeading4>
                    <StyluxStyledHeader5>
                    </StyluxStyledHeader5>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Footers
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Footer 1
                    </SubHeading4>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Footer 2
                    </SubHeading4>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Footer 3
                    </SubHeading4>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Footer 4
                    </SubHeading4>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading4>
                        Footer 5
                    </SubHeading4>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Sidebars
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        SideBar 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        SideBar 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        SideBar 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        SideBar 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        SideBar 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Carosels
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Carosel 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Product Displays
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Product Display 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Tables
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Table 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Table 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Table 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Table 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Table 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Forms
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Form 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Form 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Form 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Form 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Form 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}