import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';
import { Holder5 } from '../../../Components 1.0.0/Holders';
import {
    MainHeading1,
    SubNavbar1,
    HorizontalTestBlock1,
    SubHeading4,
} from '../../../Components 1.0.0/Blocks';
import {
    DisplayBlog1,
    DisplayBlog2,
    DisplayBlog3,
    DisplayBlog4,
} from '../../../Components 1.0.0/BlogBlocks';

export default class DisplayBlogBlockView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <MainHeading1>
                        Display Blog Blocks
                    </MainHeading1>
                </Container1>
                <SubNavbar1>
                    <Link to="/blocks">Blocks</Link>
                    <Link to="/blocks/blog/featureviews">Feature Blogs</Link>
                    <Link to="/blocks/blog/displayviews">Display Blogs</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Display Blog 1
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <DisplayBlog1>
                        "../../../images/Chris-hangingout.jpg"\
                        cat1, cat2\
                        a neat title\
                        Kogi wolf celiac echo park YOLO selfies. Pickled affogato salvia la croix venmo yr shabby chic biodiesel kickstarter sustainable taiyaki fixie. Venmo la croix tumeric mlkshk gluten-free gastropub swag butcher truffaut plaid. Succulents kogi biodiesel activated charcoal cred pok pok.\
                        date of sometime
                        </DisplayBlog1>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Display Blog 2
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <DisplayBlog2>
                        a neat title\
                        a neat name\
                        Snackwave microdosing poutine, chia viral try-hard williamsburg. Jianbing chambray snackwave, paleo coloring book marfa yr polaroid cred man bun truffaut butcher. Craft beer sustainable YOLO, copper mug vaporware mustache kale chips paleo. Humblebrag semiotics brooklyn, hell of actually stumptown sriracha jean shorts farm-to-table enamel pin flannel.\
                        "../../../images/Chris-hangingout.jpg"\
                        </DisplayBlog2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Display Blog 3
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <DisplayBlog3>
                        </DisplayBlog3>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <SubHeading4>
                        Display Blog 4
                    </SubHeading4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <DisplayBlog4>
                        "../../../images/Chris-hangingout.jpg"\
                        a super neat title\
                        </DisplayBlog4>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}