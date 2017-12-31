import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';

import Container1, { Container3 } from '../../../Components 1.0.0/Containers';

import Holder1, { Holder4, Holder5, Holder6, Holder7 } from '../../../Components 1.0.0/Holders';

import Block1, {
    HorizontalTestBlock1,
    MainHeading1,
    Heading2,
    SubHeading2,
    SecondarySubHeading2,
    SecondarySubHeading3,
    Paragraph1,
    PullQuote1,
    CircleImage,
    SubNavbar1,
    RoundedRectangleImage,
} from '../../../Components 1.0.0/Blocks';

import chrischillin from '../../../images/Chris-hangingout.jpg';

export default class SampleBlogPost6 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/samplepages/blog1">Blog 1</Link>
                    <Link to="/samplepages/blog2">Blog 2</Link>
                    <Link to="/samplepages/blog3">Blog 3</Link>
                    <Link to="/samplepages/blog4">Blog 4</Link>
                    <Link to="/samplepages/blog5">Blog 5</Link>
                    <Link to="/samplepages/blog6">Blog 6</Link>
                    <Link to="/samplepages/blog7">Blog 7</Link>
                </SubNavbar1>
                <Container3>
                    <MainHeading1>
                        Type 3 Hipsum
                    </MainHeading1>
                    <Heading2>
                        Cursive And Bands You've Never Heard Of
                    </Heading2>
                </Container3>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder6>
                        <Holder4>
                            <CircleImage>
                                {chrischillin}
                                Chris Hanging out
                            </CircleImage>
                            <SecondarySubHeading2>
                                By: The Hipster King
                            </SecondarySubHeading2>
                        </Holder4>
                        <Paragraph1>
                            Kickstarter fashion axe paleo ugh kale chips blue bottle, blog art party cliche taxidermy affogato 8-bit gluten-free pop-up. Irony affogato kogi, next level biodiesel kickstarter blog vaporware pickled chartreuse. Tofu enamel pin next level truffaut food truck, kombucha synth blog iPhone. Migas kale chips la croix messenger bag, hammock hot chicken letterpress. Unicorn shabby chic small batch pork belly raw denim tattooed kinfolk neutra next level palo santo. Brooklyn iPhone normcore taiyaki gluten-free gentrify. Street art fixie deep v pitchfork DIY tousled vinyl.
                        </Paragraph1>
                        <SecondarySubHeading3>
                            Taiyaki next level aesthetic
                        </SecondarySubHeading3>
                        <Holder6>
                            <Paragraph1>
                                Etsy plaid pug brooklyn, vexillologist fam meh street art roof party hot chicken jianbing polaroid. Schlitz flexitarian post-ironic iPhone humblebrag adaptogen. Kinfolk ugh scenester truffaut hot chicken +1 banjo meh brunch. Edison bulb sartorial meh, slow-carb literally hashtag meditation lumbersexual. DIY hot chicken cold-pressed ethical etsy fixie unicorn. Small batch single-origin coffee yr, actually prism banh mi vaporware iceland. Franzen synth umami, taiyaki man bun intelligentsia four loko try-hard normcore offal.
                            </Paragraph1>
                            <Paragraph1>
                                Chicharrones 90's hell of blue bottle flannel. Edison bulb chambray fanny pack, pork belly swag fixie whatever. Af fashion axe messenger bag, irony small batch heirloom activated charcoal offal synth dreamcatcher pug edison bulb. Taiyaki hot chicken yuccie af squid butcher glossier food truck YOLO hashtag typewriter. Tote bag chia tacos, vice hell of shaman VHS gentrify. Pinterest try-hard pour-over four loko direct trade yuccie health goth salvia ennui fixie offal hot chicken farm-to-table unicorn. Post-ironic williamsburg vape subway tile distillery everyday carry.
                            </Paragraph1>
                            <SecondarySubHeading3>
                                Plaid wayfarers man braid cray hoodie
                            </SecondarySubHeading3>
                            <Holder6>
                                <Paragraph1>
                                    Stumptown knausgaard bespoke occupy narwhal roof party poutine franzen shabby chic mumblecore fixie slow-carb ethical jean shorts. Literally before they sold out prism hot chicken vice lyft twee iPhone thundercats. Iceland tumblr enamel pin, plaid beard pop-up af fanny pack glossier pour-over seitan edison bulb drinking vinegar wayfarers vexillologist. Snackwave street art keffiyeh lomo jean shorts normcore pork belly pop-up vice hell of flexitarian narwhal. Health goth kale chips bitters cliche flannel irony air plant literally taxidermy, art party asymmetrical palo santo shoreditch. Wolf portland taiyaki master cleanse heirloom 3 wolf moon, knausgaard bushwick readymade plaid sriracha truffaut cardigan yr drinking vinegar.
                                </Paragraph1>
                                <Paragraph1>
                                    Viral disrupt bicycle rights, brunch craft beer fashion axe food truck mumblecore. Taiyaki hammock gentrify hella poutine, fam cliche wolf butcher glossier authentic blog scenester craft beer green juice. Chambray messenger bag iceland kale chips cronut franzen. Hammock normcore photo booth, bitters taiyaki poutine tousled gastropub ethical keffiyeh tumeric microdosing pop-up. La croix activated charcoal kale chips vinyl cronut narwhal yuccie heirloom tattooed glossier normcore shaman. Direct trade mustache trust fund, edison bulb poutine hammock everyday carry scenester selfies. Salvia ramps four dollar toast, waistcoat iceland flannel four loko put a bird on it sriracha you probably haven't heard of them vexillologist.
                                </Paragraph1>
                                <RoundedRectangleImage>
                                    {chrischillin}
                                </RoundedRectangleImage>
                                <Paragraph1>
                                    Hot chicken flannel coloring book truffaut taxidermy gentrify kale chips twee typewriter glossier. Subway tile before they sold out live-edge food truck waistcoat farm-to-table lo-fi 8-bit prism williamsburg slow-carb la croix. Unicorn live-edge kitsch street art ugh. Photo booth kitsch pop-up seitan authentic tbh. Pork belly post-ironic irony, beard iPhone shabby chic street art drinking vinegar enamel pin. Blog chambray fashion axe, XOXO man braid lomo kickstarter distillery subway tile jean shorts wayfarers pop-up thundercats roof party kinfolk.
                                </Paragraph1>
                            </Holder6>
                        </Holder6>
                    </Holder6>
                </Container1>
            </section>
        )
    }
}