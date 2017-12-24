import React, { Component } from 'react';
import Navigation from '../Navigation';

import { Holder5 } from '../../Component/Holders';
import Container1, { Container3 } from '../../Component/Containers';

import {
    HeadingTest1,
    HorizontalTestBlock1,
    MainHeading1,
    MainHeading2,
    MainHeading3,
    MainHeading4,
    MainHeading5,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    SubHeading1,
    SubHeading2,
    SubHeading3,
    SubHeading4,
    SubHeading5,
    SecondarySubHeading1,
    SecondarySubHeading2,
    SecondarySubHeading3,
    SecondarySubHeading4,
    SecondarySubHeading5
} from '../../Component/Blocks';

export default class HeadingBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        main headings
                </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Holder5>
                        <MainHeading1>
                            MainHeading1
                        </MainHeading1>
                        <MainHeading2>
                            MainHeading2
                        </MainHeading2>
                        <MainHeading3>
                            MainHeading3
                        </MainHeading3>
                    </Holder5>
                    <Holder5>
                        <MainHeading4>
                            MainHeading4
                        </MainHeading4>
                        <MainHeading5>
                            MainHeading5
                        </MainHeading5>
                    </Holder5>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        heading
                </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Holder5>
                        <Heading1>
                            Heading1
                        </Heading1>
                        <Heading2>
                            Heading2
                        </Heading2>
                        <Heading3>
                            Heading3
                        </Heading3>
                    </Holder5>
                    <Holder5>
                        <Heading4>
                            Heading4
                        </Heading4>
                        <Heading5>
                            Heading5
                        </Heading5>
                    </Holder5>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        subheadings
                </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Holder5>
                        <SubHeading1>
                            SubHeading1
                        </SubHeading1>
                        <SubHeading2>
                            SubHeading2
                        </SubHeading2>
                        <SubHeading3>
                            SubHeading3
                        </SubHeading3>
                    </Holder5>
                    <Holder5>
                        <SubHeading4>
                            SubHeading4
                        </SubHeading4>
                        <SubHeading5>
                            SubHeading5
                        </SubHeading5>
                    </Holder5>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <HeadingTest1>
                        secondary subheadings
                </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <Holder5>
                        <SecondarySubHeading1>
                            SecondarySubHeading1
                        </SecondarySubHeading1>
                        <SecondarySubHeading2>
                            SecondarySubHeading2
                        </SecondarySubHeading2>
                        <SecondarySubHeading3>
                            SecondarySubHeading3
                        </SecondarySubHeading3>
                    </Holder5>
                    <Holder5>
                        <SecondarySubHeading4>
                            SecondarySubHeading4
                        </SecondarySubHeading4>
                        <SecondarySubHeading5>
                            SecondarySubHeading5
                        </SecondarySubHeading5>
                    </Holder5>
                </Container3>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}