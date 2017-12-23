import React, { Component } from 'react';
import Navigation from './Navigation';

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
} from '../Component/Containers';
import {
    Block2,
    HeadingTest1,
    HorizontalTestBlock1,
} from '../Component/Blocks';


import '../Styles/ownStyles.css';

export default class ContainerView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 1
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Block2 />
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 2
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container2>
                    <Block2 />
                    <Block2 />
                </Container2>
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 3
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Block2 />
                    <Block2 />
                </Container3>
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 4
                    </HeadingTest1>
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
                    <HeadingTest1>
                        container 5
                    </HeadingTest1>
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
                    <HeadingTest1>
                        container 6
                    </HeadingTest1>
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
                    <HeadingTest1>
                        container 7
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container7>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container7>
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 8
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container8>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container8>
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 9
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container9>
                    <Block2 />
                    <Block2 />
                    <Block2 />
                </Container9>
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        container 10
                    </HeadingTest1>
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
                    <HeadingTest1>
                        container 11
                    </HeadingTest1>
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

