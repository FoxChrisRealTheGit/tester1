import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import { Holder5 } from '../../Components 1.0.0/Holders';
import {
    MainHeading1,
    SubNavbar1,
    HorizontalTestBlock1,
    SubHeading4,
    NumberList1,
    NumberList2,
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
                    <MainHeading1>
                        List Blocks
                    </MainHeading1>
                </Container1>
                <SubNavbar1
                    navbarWidth="70%">
                    <Link to="/blocks/buttonviews">button</Link>
                    <Link to="/blocks/headingviews">headings</Link>
                    <Link to="/blocks/imageviews">images</Link>
                    <Link to="/blocks/navbarviews">navbars</Link>
                    <Link to="/blocks/paragraphviews">paragraphs</Link>
                    <Link to="/blocks/carouseltickerviews">carsousels</Link>
                    <Link to="/blocks/listviews">Lists</Link>
                    <Link to="/blocks/formviews">Forms</Link>
                    <Link to="/blocks/tableviews">Tables</Link>
                    <Link to="/blocks/togglersviews">Togglers</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Number List 1
                        </SubHeading4>
                        <NumberList1>

                        </NumberList1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Number List 2
                        </SubHeading4>
                        <NumberList2>

                        </NumberList2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Bullet List 1
                        </SubHeading4>
                        <BulletList1>

                        </BulletList1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <SubHeading4>
                            Bullet List 2
                        </SubHeading4>
                        <BulletList2>

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