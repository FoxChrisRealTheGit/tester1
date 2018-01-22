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
    Table1,
    Table2,
    Table3,
    PieChart1,
} from '../../Components 1.0.0/Blocks';

export default class TableBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Table Blocks
                    </H11>
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
                        <H34>
                            Table 1
                        </H34>
                        <Table1
                            rows="4"
                            tableClassName="oddRowHighlights">
                            Head1\
                            Head2\
                            Head3\
                            body1\
                            body2\
                            body3\
                            body4\
                            body5\
                            body6\
                            body7
                        </Table1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Table 2
                        </H34>
                        <Table2
                            tableClassName="oddRowHighlights">
                            Head\
                            Body1\
                            Body2\
                            Head2\
                        </Table2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Table 3
                        </H34>
                        <Table3>

                        </Table3>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H34>
                            Pie Chart 1
                        </H34>
                        <PieChart1>

                        </PieChart1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}