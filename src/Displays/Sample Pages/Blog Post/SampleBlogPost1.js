import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../../Navigation';

import Container1, { Container2 } from '../../../Components 1.0.0/Containers';

import Holder1, { Holder5, Holder6, Holder7 } from '../../../Components 1.0.0/Holders';

import TwitterFeed1, { TwitterFeed2, TwitterFeed3 } from '../../../Components 0.5.0/SocialMediaContainers';

import Block1, {
    HorizontalTestBlock1,
    MainHeading1,
    SubHeading1,
    Paragraph1,
    Paragraph2,
    Paragraph4,
    SecondarySubHeading2,
    PullQuote1,
    CircleImage,
    SubNavbar1,
} from '../../../Components 1.0.0/Blocks';

import chrischillin from '../../../images/Chris-hangingout.jpg';

export default class SampleBlogPost1 extends Component {

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
                <Container1>
                    <Holder6>
                        <MainHeading1>
                            Hipster Ipsum
                        </MainHeading1>
                        <SubHeading1>
                            just some great hipster ipsum
                        </SubHeading1>
                    </Holder6>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container2>
                    <Holder6>
                        <CircleImage>
                            {chrischillin}
                            chris hanging out
                        </CircleImage>
                        <SecondarySubHeading2>
                            By: The Hipster King
                        </SecondarySubHeading2>
                        <Holder6>
                            <Paragraph4>
                                Poutine 90's truffaut VHS af microdosing woke authentic pug trust fund bushwick stumptown umami retro. Lyft synth polaroid XOXO, dreamcatcher cornhole hammock yuccie VHS green juice jean shorts normcore tofu ethical shabby chic. Pinterest cornhole craft beer lomo tbh shaman small batch salvia edison bulb, farm-to-table PBR&B celiac everyday carry. Fam etsy coloring book tilde gluten-free, man braid pok pok venmo readymade pop-up pitchfork sriracha humblebrag next level dreamcatcher. Authentic retro freegan plaid, man braid distillery ramps before they sold out wayfarers. Truffaut brooklyn put a bird on it, shoreditch literally godard butcher sustainable pour-over af pinterest deep v.
                            </Paragraph4>
                            <Paragraph1>
                                Pitchfork vice tote bag, cold-pressed stumptown selvage kale chips tumeric craft beer four dollar toast pickled migas polaroid disrupt. Cliche vegan woke, umami pork belly kale chips gastropub tousled letterpress 8-bit 90's. Brunch fixie chia succulents single-origin coffee pour-over. Offal schlitz drinking vinegar try-hard, jianbing stumptown tote bag readymade iPhone vegan succulents chartreuse raclette.
                            </Paragraph1>
                            <Holder6>
                                <Paragraph1>
                                    Schlitz vaporware air plant sriracha. You probably haven't heard of them banh mi meditation put a bird on it photo booth unicorn occupy heirloom fanny pack poutine bicycle rights beard artisan post-ironic echo park. Kitsch freegan bushwick poutine helvetica shaman tote bag banjo blue bottle sartorial brooklyn photo booth VHS. Kickstarter schlitz direct trade church-key narwhal yuccie wolf four dollar toast hoodie quinoa palo santo. Chicharrones forage tofu, ennui shoreditch lyft chambray man braid actually freegan. Palo santo XOXO food truck tumblr pickled heirloom vape woke pabst knausgaard irony trust fund vegan everyday carry photo booth. Whatever enamel pin pickled austin organic mustache before they sold out meditation meh.
                                </Paragraph1>
                                <Paragraph1>
                                    Knausgaard disrupt unicorn hexagon migas coloring book actually small batch mumblecore tumblr vice pickled occupy banjo. Taxidermy polaroid disrupt bicycle rights, authentic activated charcoal synth cray bespoke austin hammock neutra typewriter shoreditch. Lyft retro health goth flexitarian, man braid meggings heirloom salvia pinterest cliche 90's enamel pin blog flannel. Kickstarter blog hashtag fixie af pickled salvia, cloud bread coloring book fanny pack. Sriracha selfies before they sold out poke swag flannel, everyday carry kitsch +1 scenester shaman forage. Tousled la croix iceland austin hella whatever.
                                </Paragraph1>
                                <PullQuote1>
                                    Fashion axe adaptogen lomo 3 wolf moon plaid farm-to-table trust fund fanny pack disrupt migas air plant waistcoat flannel cornhole.\
                            Hipster Person
                                </PullQuote1>
                                <Holder6>
                                    <Paragraph1>
                                        Banjo glossier DIY cold-pressed squid. Farm-to-table keffiyeh tbh, street art ugh taiyaki dreamcatcher stumptown marfa franzen chillwave 8-bit vinyl wolf. Pour-over shoreditch aesthetic affogato farm-to-table tousled typewriter plaid helvetica raclette air plant. Butcher green juice freegan tbh neutra pickled squid pok pok cred. Lomo shabby chic chicharrones cliche chartreuse leggings humblebrag fanny pack raw denim pinterest taiyaki.
                                        </Paragraph1>
                                    <Paragraph1>
                                        Succulents bicycle rights tilde direct trade, vexillologist air plant synth +1 dreamcatcher mixtape cloud bread. Craft beer bicycle rights shabby chic forage four dollar toast messenger bag. Brooklyn chartreuse tofu pickled, brunch hoodie banh mi 8-bit wayfarers lomo cray PBR&B raw denim austin. Pickled single-origin coffee tousled, selfies flannel polaroid hot chicken 3 wolf moon kickstarter austin vaporware. Kogi tumblr mixtape raclette ethical, trust fund pork belly chicharrones stumptown cred church-key pinterest deep v lumbersexual pok pok. Beard neutra actually deep v. Wayfarers squid before they sold out XOXO gluten-free, microdosing adaptogen migas neutra occupy flexitarian taxidermy.
                                    </Paragraph1>
                                </Holder6>
                            </Holder6>
                        </Holder6>
                    </Holder6>
                    <Holder5>
                        <TwitterFeed1>
                            FoxChrisRealThe
                        </TwitterFeed1>
                        <TwitterFeed2>
                            FoxChrisRealThe
                        </TwitterFeed2>
                        <TwitterFeed3>
                            FoxChrisRealThe
                        </TwitterFeed3>
                    </Holder5>
                </Container2>
            </section>
        )
    }
}
