import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';

import Container1 from '../../../Component/Containers';

import Holder1, { Holder4, Holder5, Holder6, Holder7 } from '../../../Component/Holders';

import Block1, {
    HorizontalTestBlock1,
    MainHeading4,
    SubHeading2,
    SecondarySubHeading2,
    Paragraph6,
    Paragraph9,
    PullQuote1,
    CircleImage2,
    SubNavbar1
} from '../../../Component/Blocks';

import chrischillin from '../../../images/Chris-hangingout.jpg';

export default class SampleBlogPost2 extends Component {

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
                    <Holder5>
                        <MainHeading4>
                            Moar Hipster Ipsum
                        </MainHeading4>
                        <SubHeading2>
                            Your guide to great hipster ipsum
                        </SubHeading2>
                    </Holder5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder4>
                        <CircleImage2>
                            {chrischillin}
                            Chris Hanging out
                        </CircleImage2>
                        <SecondarySubHeading2>
                            By: The Hipster King
                        </SecondarySubHeading2>
                    </Holder4>
                </Container1>
                <Container1>
                    <Holder6>
                        <Paragraph9>
                            Migas squid lumbersexual, roof party etsy tumblr vexillologist hot chicken godard paleo tofu freegan. Vinyl pop-up cornhole, single-origin coffee quinoa snackwave aesthetic affogato master cleanse four loko sartorial plaid pug knausgaard. Polaroid viral plaid, asymmetrical cronut synth church-key vinyl chambray air plant subway tile letterpress shoreditch. YOLO artisan before they sold out jianbing helvetica direct trade.
                        </Paragraph9>
                        <Paragraph6>
                            Single-origin coffee readymade vape, wayfarers kickstarter art party subway tile ennui bushwick hashtag literally hella hammock direct trade. Dreamcatcher wolf chia, everyday carry paleo man braid readymade wayfarers shoreditch heirloom tofu pug. Taiyaki small batch photo booth mlkshk, post-ironic kogi kombucha adaptogen. La croix master cleanse trust fund deep v pok pok enamel pin snackwave freegan meggings gluten-free 8-bit cred shoreditch actually slow-carb. Narwhal offal hashtag pour-over pickled banjo, cronut beard coloring book. Skateboard tbh small batch keffiyeh you probably haven't heard of them, pabst tumeric four loko selfies tacos bespoke.
                        </Paragraph6>
                        <Paragraph6>
                            Church-key godard salvia chia bushwick, fingerstache live-edge schlitz gluten-free la croix. Blue bottle squid helvetica, hammock brooklyn la croix mumblecore photo booth bicycle rights raclette kickstarter lo-fi microdosing. Kickstarter adaptogen cliche hell of glossier pickled semiotics readymade knausgaard fingerstache heirloom synth bitters blue bottle offal. You probably haven't heard of them jean shorts tofu thundercats portland cronut lyft wolf pok pok tousled fixie craft beer. Prism pork belly iceland 8-bit 3 wolf moon. Crucifix ethical palo santo, tofu taiyaki cornhole williamsburg kale chips craft beer shabby chic knausgaard intelligentsia hell of.
                        </Paragraph6>
                        <Paragraph6>
                            Craft beer hashtag viral air plant. Af sriracha activated charcoal copper mug swag. Etsy polaroid bitters selvage brooklyn roof party subway tile. Adaptogen migas sartorial post-ironic trust fund hexagon readymade skateboard dreamcatcher franzen banh mi typewriter. Mixtape plaid seitan before they sold out meggings health goth unicorn. Vice copper mug cliche austin you probably haven't heard of them, cornhole typewriter master cleanse slow-carb vaporware yr gentrify four loko. Normcore tattooed poutine squid, letterpress asymmetrical la croix etsy cliche.
                        </Paragraph6>
                    </Holder6>
                </Container1>
                <Container1>
                    <PullQuote1>
                        Authentic artisan brunch, squid art party master cleanse godard put a bird on it pitchfork activated charcoal sriracha echo park church-key selfies cardigan.\
                        Hipster Know it All
                    </PullQuote1>
                </Container1>
                <Container1>
                    <Holder6>
                        <Paragraph6>
                            Heirloom gentrify hammock etsy yuccie enamel pin cray you probably haven't heard of them church-key. Schlitz VHS narwhal forage kickstarter tbh 3 wolf moon tote bag typewriter lomo fingerstache. Craft beer pug ethical selvage dreamcatcher shabby chic occupy. Hammock squid photo booth brooklyn hella selfies cray next level kogi. Dreamcatcher listicle lomo, poutine vinyl gochujang schlitz. Trust fund schlitz succulents, hexagon you probably haven't heard of them celiac taxidermy echo park YOLO shabby chic gastropub literally DIY intelligentsia readymade.
                        </Paragraph6>
                        <Paragraph6>
                            Blue bottle schlitz drinking vinegar glossier gochujang jean shorts, wayfarers enamel pin seitan lyft woke banjo. Deep v yr kitsch fam godard shabby chic, photo booth knausgaard jean shorts gochujang. Retro banh mi fingerstache live-edge chartreuse gentrify. Iceland pop-up freegan, pour-over meditation ramps slow-carb raw denim meggings humblebrag XOXO umami palo santo. Succulents photo booth hammock flannel, before they sold out thundercats hot chicken pitchfork. Skateboard messenger bag dreamcatcher mixtape chillwave selfies sriracha intelligentsia fanny pack air plant hot chicken.
                        </Paragraph6>
                        <Paragraph6>
                            Chicharrones vegan typewriter, cloud bread deep v 8-bit plaid copper mug bespoke. Echo park deep v pug quinoa gluten-free pickled tattooed, synth kogi art party next level whatever everyday carry. Poke gastropub four loko franzen. Selvage enamel pin marfa, cold-pressed flexitarian keytar tilde lo-fi small batch post-ironic pork belly tumeric seitan. Man bun seitan keffiyeh, mumblecore chicharrones air plant banjo sriracha blue bottle messenger bag austin fixie. Adaptogen selvage activated charcoal forage gentrify keytar VHS.
                        </Paragraph6>
                        <Paragraph6>
                            Put a bird on it seitan retro etsy lomo. Bicycle rights twee man bun vaporware aesthetic. Artisan DIY semiotics waistcoat thundercats pop-up gluten-free hella. Pickled craft beer skateboard tote bag migas woke vinyl dreamcatcher gochujang banh mi neutra photo booth glossier. Kinfolk actually photo booth portland YOLO farm-to-table echo park plaid +1. Drinking vinegar hammock food truck, kale chips messenger bag waistcoat affogato pinterest raw denim farm-to-table chartreuse. PBR&B YOLO kogi prism cold-pressed iPhone jianbing slow-carb hexagon street art normcore synth ennui organic iceland.
                        </Paragraph6>
                    </Holder6>
                </Container1>
            </section>
        )
    }
}
