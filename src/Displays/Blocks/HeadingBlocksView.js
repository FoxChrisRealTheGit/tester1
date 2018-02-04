import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import {  Holder8 } from '../../Components 1.0.0/Holders';
import Container1 from '../../Components 1.0.0/Containers';
import {
    HorizontalTestBlock1,
    H11,
    H12,
    H13,
    H14,
    H15,
    H21,
    H22,
    H23,
    H24,
    H25,
    H31,
    H32,
    H33,
    H34,
    H35,
    H41,
    H42,
    H43,
    H44,
    H45,
    SubNavbar1,
} from '../../Components 1.0.0/Blocks';

export default class HeadingBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Headings
                    </H11>
                </Container1>
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
                <Container1>
                    <H21>
                        Default: Sans-serif
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        main headings
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder8>
                        <H11>
                            H11
                        </H11>
                        <H12>
                            H12
                        </H12>
                        <H13>
                            H13
                        </H13>
                        <H14>
                            H14
                        </H14>
                        <H15>
                            H15
                        </H15>
                    </Holder8>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        heading
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder8>
                        <H21>
                            H21
                        </H21>
                        <H22>
                            H22
                        </H22>
                        <H23>
                            H23
                        </H23>
                        <H24>
                            H24
                        </H24>
                        <H25>
                            H25
                        </H25>
                    </Holder8>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        subheadings
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder8>
                        <H31>
                            H31
                        </H31>
                        <H32>
                            H32
                        </H32>
                        <H33>
                            H33
                        </H33>
                        <H34>
                            H34
                        </H34>
                        <H35>
                            H35
                        </H35>
                    </Holder8>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        secondary subheadings
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder8>
                        <H41>
                            H41
                        </H41>
                        <H42>
                            H42
                        </H42>
                        <H43>
                            H43
                        </H43>
                        <H44>
                            H44
                        </H44>
                        <H45>
                            H45
                        </H45>
                    </Holder8>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}