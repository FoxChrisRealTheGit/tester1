import React, { Component } from 'react';
import Navigation from '../Navigation';

import chrischillin from '../../images/Chris-hangingout.jpg';

import Container1 from '../../Component/Containers';
import {
    HeadingTest1,
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
                    <HeadingTest1>
                        Images
                    </HeadingTest1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <CircleImage1>
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <CircleImage2>
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <RoundedImage1>
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <RoundedImage2>
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SquareImage1>
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SquareImage2>
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage2>
                </Container1>
            </section>
        )
    }
}