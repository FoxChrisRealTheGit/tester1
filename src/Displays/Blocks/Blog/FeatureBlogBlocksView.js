import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { Holder5 } from '../../../Components 1.0.0/Holders';
import {
    H11,
    SubNavbar1,
    HorizontalTestBlock1,
    H34,
} from '../../../Components 1.0.0/Blocks';
import FeatureBlog1, {
    FeatureBlog2,
} from '../../../Components 1.0.0/BlogBlocks';

export default class FeatureBlogBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Feature Blog Blocks
                    </H11>
                </Container1>
                <SubNavbar1>
                    <Link to="/blocks">Blocks</Link>
                    <Link to="/blocks/blog/featureviews">Feature Blogs</Link>
                    <Link to="/blocks/blog/displayviews">Display Blogs</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Feature Blog 1
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <FeatureBlog1>
                            awesomeness, newness, sweetness\
                            A Super Cool Name!!!\
                            January of sometime 2018\
                            "../../../images/Chris-hangingout.jpg"\
                            Hashtag banjo squid, umami cronut four dollar toast four loko beard cornhole kogi single-origin coffee. Trust fund cornhole squid, drinking vinegar la croix pinterest affogato biodiesel leggings selvage vexillologist bitters put a bird on it. Activated charcoal freegan banh mi enamel pin flexitarian portland. Chartreuse fixie twee master cleanse, blue bottle try-hard celiac sustainable copper mug occupy. Cardigan austin pinterest la croix everyday carry bespoke. VHS post-ironic four dollar toast bicycle rights sartorial etsy. Ennui mlkshk narwhal post-ironic paleo vape, thundercats mixtape leggings hot chicken.\
                        </FeatureBlog1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Feature Blog 2
                    </H34>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <FeatureBlog2>
                            "../../../images/Chris-hangingout.jpg"\
                            "../../../images/Chris-hangingout.jpg"\
                            a neat title\
                            a neater name\
                            "../../../images/Chris-hangingout.jpg"\
                            a neat title\
                            a neater name\
                            "../../../images/Chris-hangingout.jpg"\
                            a neat title\
                            a neater name\
                        </FeatureBlog2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}
