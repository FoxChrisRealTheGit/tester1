import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';

import chrischillin from '../../images/Chris-hangingout.jpg';

import Container1 from '../../Components 1.0.0/Containers';
import { Holder4 } from '../../Components 1.0.0/Holders';
import {
    Heading1,
    SubHeading4,
    SubNavbar1,
    HorizontalTestBlock1,
    CircleImage,
    RoundedImage,
    SquareImage,
    RoundedRectangleImage,
    RectangleImage,
} from '../../Components 1.0.0/Blocks';

export default class ImageBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/blocks/buttonviews">Button</Link>
                    <Link to="/blocks/headingviews">Headings</Link>
                    <Link to="/blocks/imageviews">Images</Link>
                    <Link to="/blocks/navbarviews">NavBars</Link>
                    <Link to="/blocks/paragraphviews">Paragraphs</Link>
                </SubNavbar1>
                <Container1>
                    <Heading1>
                        Images
                    </Heading1>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Circle Image 1
                    </SubHeading4>
                    <CircleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Circle Image 2
                    </SubHeading4>
                    <CircleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Circle Image 3
                    </SubHeading4>
                    <CircleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Circle Image 4
                    </SubHeading4>
                    <CircleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Circle Image 5
                    </SubHeading4>
                    <CircleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Image 1
                    </SubHeading4>
                    <RoundedImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Image 2
                    </SubHeading4>
                    <RoundedImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Image 3
                    </SubHeading4>
                    <RoundedImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Image 4
                    </SubHeading4>
                    <RoundedImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Image 5
                    </SubHeading4>
                    <RoundedImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Square Image 1
                    </SubHeading4>
                    <SquareImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Square Image 2
                    </SubHeading4>
                    <SquareImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder4>
                <Holder4>
                    <SubHeading4>
                        Square Image 3
                    </SubHeading4>
                    <SquareImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Square Image 4
                    </SubHeading4>
                    <SquareImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Square Image 5
                    </SubHeading4>
                    <SquareImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Rectangle Image 1
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Rectangle Image 2
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Rectangle Image 3
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Rectangle Image 4
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rounded Rectangle Image 5
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rectangle Image 1
                    </SubHeading4>
                    <RectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rectangle Image 2
                    </SubHeading4>
                    <RectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rectangle Image 3
                    </SubHeading4>
                    <RectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rectangle Image 4
                    </SubHeading4>
                    <RectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
                <Holder4>
                    <SubHeading4>
                        Rectangle Image 5
                    </SubHeading4>
                    <RectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder4>
                <HorizontalTestBlock1 />
            </section>
        )
    }
}