import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import { Holder5 } from '../../Components 1.0.0/Holders';
import {
    H11,
    SubNavbar1,
    HorizontalTestBlock1,
    H34,
    NumberList1,
    NumberList2,
    NumberList3,
    BulletList1,
    BulletList2,
} from '../../Components 1.0.0/Blocks';

export default class ListBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        List Blocks
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
                    <Holder5>
                        <H34>
                            Number List 1
                        </H34>
                        <NumberList1>
                            {'listItem1'}
                            {'listItem2'}
                            {'listItem3'}
                            {'listItem4'}
                        </NumberList1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Number List 2
                        </H34>
                        <NumberList2 listAmount='3'>
                            <p>listItem1</p>
                            <p>nestedlistItem1</p>
                            <p>nestedlistItem2</p>
                            <p>listItem2</p>
                            <p>nestedlistItem1</p>
                            <p>nestedlistItem2</p>
                            <p>listItem3</p>
                            <p>nestedlistItem1</p>
                            <p>nestedlistItem2</p>
                            <p>listItem4</p>
                            <p>nestedlistItem1</p>
                            <p>nestedlistItem2</p>
                            <p>listItem5</p>
                            <p>nestedlistItem1</p>
                            <p>nestedlistItem2</p>
                        </NumberList2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Number List 3
                        </H34>
                        <NumberList3>
                            {'listItem1'}
                            {'listItem2'}
                            {'listItem3'}
                            {'listItem4'}
                        </NumberList3>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Bullet List 1
                        </H34>
                        <BulletList1>
                            {'listItem1'}
                            {'listItem2'}
                            {'listItem3'}
                            {'listItem4'}
                        </BulletList1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Bullet List 2
                        </H34>
                        <BulletList2>
                            {'listItem1'}
                            {'listItem2'}
                            {'listItem3'}
                            {'listItem4'}
                        </BulletList2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}