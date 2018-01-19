import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import {
    H11,
    SubNavbar1,
    H21,
    H34,
    HorizontalTestBlock1,
    ImageSlider1,
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
} from '../../Components 1.0.0/StyledContainers';

import Container1, { Container3 } from '../../Components 1.0.0/Containers';

/* Images */
import chrisLeaves from "../../images/chrisLeaves.jpg";
import KarenJump from "../../images/KarenJump.jpg";
import Kristen from "../../images/Kristen.jpg";
import KristenButt from "../../images/KristenButt.jpg";

export default class StyledContainerMain extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <Container1>
                    <H11>
                        Pre Styled Containers
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/containers/styled">styled containers</Link>
                    <Link to="/containers/unstyled">unstyled containers</Link>
                    <Link to="/holders">holders</Link>
                </SubNavbar1>
                
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Headers
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Header 1
                    </H34>
                    <StyluxStyledHeader1>
                    </StyluxStyledHeader1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Header 2
                    </H34>
                    <StyluxStyledHeader2>
                    </StyluxStyledHeader2>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Header 3
                    </H34>
                    <StyluxStyledHeader3>
                    </StyluxStyledHeader3>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Header 4
                    </H34>
                    <StyluxStyledHeader4>
                    </StyluxStyledHeader4>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Header 5
                    </H34>
                    <StyluxStyledHeader5>
                    </StyluxStyledHeader5>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Footers
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Footer 1
                    </H34>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Footer 2
                    </H34>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Footer 3
                    </H34>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Footer 4
                    </H34>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <H34>
                        Footer 5
                    </H34>
                    <StyluxStyledFooter1>
                    </StyluxStyledFooter1>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Sidebars
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        SideBar 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        SideBar 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        SideBar 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        SideBar 4
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        SideBar 5
                    </H34>
                </Container1>
                              
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Product Displays
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 4
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Product Display 5
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Tables
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Table 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Table 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Table 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Table 4
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Table 5
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Forms
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Form 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Form 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Form 3
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Form 4
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Form 5
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}