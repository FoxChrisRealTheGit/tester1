import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import chrischillin from '../../images/Chris-hangingout.jpg';

import Container from '../../Component 1.5.0/Containers1.5.0';
import Holder from '../../Component 1.5.0/Holders1.5.0';
import {
    H11,
    H34,
    SubNavbar1,
    HorizontalTestBlock1,
    CircleImage,
    OvalImage,
    RoundedImage,
    SquareImage,
    RoundedRectangleImage,
    RectangleImage,
    TallRoundedRectangleImage,
    TallRectangleImage,
    Figure,
    Hero1,
    Hero2,
    Hero3,
    Hero4,
    Hero5,
    H22,
    P2,
    VideoHero1,
} from '../../Components 1.0.0/Blocks';

export default class ImageBlocksView extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container>
                    <H11>
                        Images
                    </H11>
                </Container>
                <SubNavbar1
                    navbarWidth="70%">
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                    <Link to="/blocks/carouseltickerviews">carousels</Link>
                    <Link to="/blocks/listviews">Lists</Link>
                    <Link to="/blocks/formviews">Forms</Link>
                    <Link to="/blocks/tableviews">Tables</Link>
                    <Link to="/blocks/togglersviews">Togglers</Link>
                </SubNavbar1>

                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Circle Image tn
                    </H34>
                    <CircleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Circle Image exsm
                    </H34>
                    <CircleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Circle Image sm
                    </H34>
                    <CircleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Circle Image md
                    </H34>
                    <CircleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Circle Image lg
                    </H34>
                    <CircleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Circle Image exlg
                    </H34>
                    <CircleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </CircleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Oval Image tn
                    </H34>
                    <OvalImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </OvalImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Oval Image exsm
                    </H34>
                    <OvalImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </OvalImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Oval Image sm
                    </H34>
                    <OvalImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </OvalImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Oval Image md
                    </H34>
                    <OvalImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </OvalImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Oval Image lg
                    </H34>
                    <OvalImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </OvalImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Oval Image exlg
                    </H34>
                    <OvalImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </OvalImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Image tn
                    </H34>
                    <RoundedImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Image exsm
                    </H34>
                    <RoundedImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Image sm
                    </H34>
                    <RoundedImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Image md
                    </H34>
                    <RoundedImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Image lg
                    </H34>
                    <RoundedImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Image exlg
                    </H34>
                    <RoundedImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Square Image tn
                    </H34>
                    <SquareImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Square Image exsm
                    </H34>
                    <SquareImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Square Image sm
                    </H34>
                    <SquareImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <Holder
                    direction="column">
                    <H34>
                        Square Image md
                    </H34>
                    <SquareImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Square Image lg
                    </H34>
                    <SquareImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Square Image exlg
                    </H34>
                    <SquareImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </SquareImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image tn
                    </H34>
                    <RoundedRectangleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image exsm
                    </H34>
                    <RoundedRectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image sm
                    </H34>
                    <RoundedRectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image md
                    </H34>
                    <RoundedRectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image lg
                    </H34>
                    <RoundedRectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rounded Rectangle Image exlg
                    </H34>
                    <RoundedRectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image tn
                    </H34>
                    <RectangleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image exsm
                    </H34>
                    <RectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image sm
                    </H34>
                    <RectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image md
                    </H34>
                    <RectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image lg
                    </H34>
                    <RectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Rectangle Image exlg
                    </H34>
                    <RectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </RectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image tn
                    </H34>
                    <TallRoundedRectangleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image exsm
                    </H34>
                    <TallRoundedRectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image sm
                    </H34>
                    <TallRoundedRectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image md
                    </H34>
                    <TallRoundedRectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image lg
                    </H34>
                    <TallRoundedRectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rounded Rectangle Image exlg
                    </H34>
                    <TallRoundedRectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </TallRoundedRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image tn
                    </H34>
                    <TallRectangleImage
                        size="tn">
                        {chrischillin}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image exsm
                    </H34>
                    <TallRectangleImage
                        size="exsm">
                        {chrischillin}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image sm
                    </H34>
                    <TallRectangleImage
                        size="sm">
                        {chrischillin}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image md
                    </H34>
                    <TallRectangleImage
                        size="md">
                        {chrischillin}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image lg
                    </H34>
                    <TallRectangleImage
                        size="lg">
                        {chrischillin}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Tall Rectangle Image exlg
                    </H34>
                    <TallRectangleImage
                        size="exlg">
                        {chrischillin}
                        Chris Hanging out
                    </TallRectangleImage>
                </Holder>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Figure
                    </H34>
                    <Figure>
                        <CircleImage
                            size="md">
                            {chrischillin}
                            Chris Hanging out
                        </CircleImage>
                        Just Chris Hanging Out
                    </Figure>
                </Holder>
                <HorizontalTestBlock1 />

                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Hero Image 1
                    </H34>
                    <Hero1
                        height="500px"
                        image={`url(${chrischillin})`}>
                        <H22>title of awesomeness</H22>
                        <button>button of coolness</button>
                        <P2>A descriptive super sweet tagline</P2>
                    </Hero1>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Hero Image 2
                    </H34>
                    <Hero2
                        height="500px"
                        image={`url(${chrischillin})`}>
                        <P2>Something really cool and neat and super awesome</P2>
                    </Hero2>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Hero Image 3
                    </H34>
                    <Hero3
                        height="500px"
                        image={`url(${chrischillin})`}>
                        <button>button of awesomeness</button>
                    </Hero3>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Hero Image 4
                    </H34>
                    <Hero4
                        height="500px"
                        image={`url(${chrischillin})`}>
                        <button>button of awesomeness</button>
                    </Hero4>
                </Holder>
                <HorizontalTestBlock1 />
                <Holder
                    direction="column">
                    <H34>
                        Hero Image 5
                    </H34>
                    <Hero5
                        height="500px"
                        image={`url(${chrischillin})`}>
                        <button>button of amazingness</button>
                        <button>button of awesomeness</button>
                        <button>button of awesomeness</button>
                        <button>button of awesomeness</button>
                        <button>button of awesomeness</button>
                        <button>button of awesomeness</button>
                        <button>button of awesomeness</button>
                    </Hero5>
                </Holder>
                <Holder
                    direction="column">
                    <H34>
                        Video Hero 1
                    </H34>
                    <VideoHero1>
                        {'https://www.youtube.com/embed/CewMacdRc6A?autoplay=1&loop=1&controls=0&showinfo=0&mute=1'}
                    </VideoHero1>
                </Holder>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}