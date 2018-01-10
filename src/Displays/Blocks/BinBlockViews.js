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
    Toggler1,
    FlatButton1,
    Navbar1,
    Toggler2,
    Paragraph2,
    Toggler3
} from '../../Components 1.0.0/Blocks';

export default class BinBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Toggler Blocks
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
                <Holder5>
                    <SubHeading4>
                        Toggler 1
                    </SubHeading4>
                    <Toggler1
                        width='200px'
                        right="0">
                        <Holder5>
                            <Navbar1
                                direction="column">
                                <Link to="">item1</Link>
                                <Link to="">item2</Link>
                                <Link to="">item3</Link>
                                <Link to="">item4</Link>
                            </Navbar1>
                        </Holder5>
                    </Toggler1>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Toggler 2
                    </SubHeading4>
                    <Toggler2>
                        <Paragraph2>
                        Artisan man bun kombucha palo santo DIY godard af distillery offal. IPhone tote bag cardigan tumeric keytar health goth skateboard tbh succulents taxidermy poke sustainable fingerstache celiac. Etsy taxidermy four dollar toast hexagon tbh unicorn, hashtag pinterest. Vape pok pok hexagon sartorial fam tumblr, palo santo literally kitsch woke wolf DIY. Tote bag glossier bushwick gluten-free butcher pug, mumblecore leggings. Cred kale chips microdosing chicharrones taiyaki, synth typewriter neutra chartreuse jianbing pinterest lyft. Stumptown taxidermy pork belly, photo booth blog +1 glossier iceland.
                        </Paragraph2>
                    </Toggler2>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Toggler 3
                    </SubHeading4>
                    <Toggler3>
                        title\
                        some text\
                        another title\
                        moar text\
                        last title\
                        last text\
                        not last\
                        most last text
                    </Toggler3>
                </Holder5>
                <HorizontalTestBlock1 />
                <Holder5>
                    <SubHeading4>
                        Toggler 4
                    </SubHeading4>
                </Holder5>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}