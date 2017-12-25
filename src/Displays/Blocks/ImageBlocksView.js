import React, { Component } from 'react';
import Navigation from '../Navigation';

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
                    </CircleImage1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <CircleImage2>
                    </CircleImage2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <RoundedImage1>
                    </RoundedImage1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <RoundedImage2>
                    </RoundedImage2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SquareImage1>
                    </SquareImage1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SquareImage2>
                    </SquareImage2>
                </Container1>
            </section>
        )
    }
}