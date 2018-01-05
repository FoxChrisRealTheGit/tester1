import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import chrischillin from '../../images/Chris-hangingout.jpg';

import Container1 from '../../Components 1.0.0/Containers';
import { Holder5 } from '../../Components 1.0.0/Holders';
import {
    MainHeading1,
    SubHeading4,
    SubNavbar1,
    HorizontalTestBlock1,
    CircleImage,
    RoundedImage,
    SquareImage,
    RoundedRectangleImage,
    RectangleImage,
    Figure,
} from '../../Components 1.0.0/Blocks';

export default class ImageBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Images
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                    <Link to="/blocks/carouseltickerviews">carsousels</Link>
                </SubNavbar1>

                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Circle Image 1
                    </SubHeading4>
                    <CircleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Circle Image 2
                    </SubHeading4>
                    <CircleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Circle Image 3
                    </SubHeading4>
                    <CircleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Circle Image 4
                    </SubHeading4>
                    <CircleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Circle Image 5
                    </SubHeading4>
                    <CircleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Circle Image 6
                    </SubHeading4>
                    <CircleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Image 1
                    </SubHeading4>
                    <RoundedImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Image 2
                    </SubHeading4>
                    <RoundedImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Image 3
                    </SubHeading4>
                    <RoundedImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Image 4
                    </SubHeading4>
                    <RoundedImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Image 5
                    </SubHeading4>
                    <RoundedImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Image 6
                    </SubHeading4>
                    <RoundedImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Square Image 1
                    </SubHeading4>
                    <SquareImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Square Image 2
                    </SubHeading4>
                    <SquareImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Square Image 3
                    </SubHeading4>
                    <SquareImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder5>
                <Holder5>
                    <SubHeading4>
                        Square Image 4
                    </SubHeading4>
                    <SquareImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Square Image 5
                    </SubHeading4>
                    <SquareImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Square Image 6
                    </SubHeading4>
                    <SquareImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Rectangle Image 1
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Rectangle Image 2
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Rectangle Image 3
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Rectangle Image 4
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Rectangle Image 5
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rounded Rectangle Image 6
                    </SubHeading4>
                    <RoundedRectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rectangle Image 1
                    </SubHeading4>
                    <RectangleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rectangle Image 2
                    </SubHeading4>
                    <RectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rectangle Image 3
                    </SubHeading4>
                    <RectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rectangle Image 4
                    </SubHeading4>
                    <RectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rectangle Image 5
                    </SubHeading4>
                    <RectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Rectangle Image 6
                    </SubHeading4>
                    <RectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Figure
                    </SubHeading4>
                    <Figure>
                        <CircleImage
                            size="md">
                            {chrischillin}
                            Chris Hanging out
                        </CircleImage>
                        Just Chris Hanging Out
                    </Figure>
                </Holder5>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}