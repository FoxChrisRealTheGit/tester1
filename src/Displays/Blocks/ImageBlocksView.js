import React, { Component } from 'react';
import Navigation from '../Navigation';

import chrischillin from '../../images/Chris-hangingout.jpg';

import Container1, { Container3 } from '../../Component/Containers';
import {
    Heading1,
    SubHeading2,
    HorizontalTestBlock1,
    CircleImage1,
    CircleImage2,
    RoundedImage1,
    RoundedImage2,
    SquareImage1,
    SquareImage2
} from '../../Component/Blocks';

export default class ImageBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Heading1>
                        Images
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Circle Image 1
                    </SubHeading2>
                    <CircleImage1>
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Circle Image 2
                    </SubHeading2>
                    <CircleImage2>
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage2>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Rounded Image 1
                    </SubHeading2>
                    <RoundedImage1>
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Rounded Image 2
                    </SubHeading2>
                    <RoundedImage2>
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage2>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Square Image 1
                    </SubHeading2>
                    <SquareImage1>
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage1>
                </Container3>
                <HorizontalTestBlock1 />
                <Container3>
                    <SubHeading2>
                        Square Image 2
                    </SubHeading2>
                    <SquareImage2>
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage2>
                </Container3>
            </section>
        )
    }
}