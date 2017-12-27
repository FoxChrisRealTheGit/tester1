import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation';

import Container1,
{
    Container2,
    Container3,
    Container4,
    Container5,
    Container6,
    Container7,
    Container8,
    Container9,
    Container10,
    Container11
} from '../../Component/Containers';
import {
    Block2,
    MainHeading1,
    SubHeading4,
    HorizontalTestBlock1,
    SubNavbar1
} from '../../Component/Blocks';

export default class ContainerView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/containers/styled">Styled Containers</Link>
                    <Link to="/containers/unstyled">Unstyled Containers</Link>
                    <Link to="/holders">Holders</Link>
                </SubNavbar1>
                <Container1>
                    <MainHeading1>
                        UnStyled Containers
                    </MainHeading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Block2 />
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container2>
                    <Block2 />
                    <Block2 />
                </Container2>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Block2 />
                    <Block2 />
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container4>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container4>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 5
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container5>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container5>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 6
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container6>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container6>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 7
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container7>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container7>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 8
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container8>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container8>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 9
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container9>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container9>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 10
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container10>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container10>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        container 11
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container11>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container11>
            </section>
        );
    }
}

