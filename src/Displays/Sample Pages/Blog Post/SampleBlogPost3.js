import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../../Navigation';
import FooterNavigation from '../../FooterNavigation';

import Container1 from '../../../Components 1.0.0/Containers';

import Holder1, {  Holder5, Holder6, Holder13 } from '../../../Components 1.0.0/Holders';

import { FacebookFeed1, FacebookFeed2, FacebookFeed3 } from '../../../Components 1.0.0/SocialMediaContainers';

import {
    HorizontalTestBlock1,
    H42,
    P1,
    CircleImage,
    SubNavbar1,
    H11,
    P5,
    H24,
    RoundedImage,
    PLQ2
} from '../../../Components 1.0.0/Blocks';

import chrischillin from '../../../images/Chris-hangingout.jpg';

export default class SampleBlogPost3 extends Component {

    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder5>
                        <H11>
                            Most Hipster Ipsum
                        </H11>
                        <H24>
                            Handlebar Mustaches And All
                        </H24>
                    </Holder5>
                </Container1>
                <SubNavbar1>
                    <Link to="/samplepages/blog1">Blog 1</Link>
                    <Link to="/samplepages/blog2">Blog 2</Link>
                    <Link to="/samplepages/blog3">Blog 3</Link>
                    <Link to="/samplepages/blog4">Blog 4</Link>
                    <Link to="/samplepages/blog5">Blog 5</Link>
                    <Link to="/samplepages/blog6">Blog 6</Link>
                    <Link to="/samplepages/blog7">Blog 7</Link>
                </SubNavbar1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <Holder1
                        justifyBlock1="flex-start">
                        <Holder6>
                            <FacebookFeed1>
                                FoxDesignAgency
                            </FacebookFeed1>
                            <FacebookFeed2>
                                FoxDesignAgency
                            </FacebookFeed2>
                            <FacebookFeed3>
                                FoxDesignAgency
                        </FacebookFeed3>
                        </Holder6>
                        <Holder13>
                            <CircleImage>
                                {chrischillin}
                                Chris Hanging out
                            </CircleImage>
                            <H42>
                                By: The Hipster King
                            </H42>
                            <P5>
                                Humblebrag bitters tofu fingerstache authentic palo santo listicle ugh snackwave shoreditch keffiyeh pug hoodie distillery meh. Cold-pressed butcher pork belly gastropub raw denim offal actually kogi post-ironic cliche readymade retro semiotics slow-carb tousled. Kinfolk schlitz brunch, blog cardigan direct trade fingerstache man braid franzen vaporware palo santo poke kitsch. Try-hard tbh pour-over cornhole snackwave mlkshk austin coloring book quinoa ramps four loko heirloom. Authentic plaid unicorn food truck. Gluten-free crucifix poke, vaporware copper mug woke chambray kitsch swag next level biodiesel. Copper mug pug vinyl narwhal activated charcoal organic wolf celiac edison bulb sartorial leggings hoodie authentic.
                            </P5>
                            <Holder1>
                                <RoundedImage
                                size="md">
                                    {chrischillin}
                                </RoundedImage>
                                <P1>
                                    Lo-fi man braid jean shorts umami pop-up, unicorn you probably haven't heard of them echo park ennui. Selvage coloring book adaptogen blog venmo narwhal, chicharrones small batch put a bird on it synth edison bulb kogi vexillologist waistcoat. Artisan chillwave bespoke pug whatever. Next level polaroid forage af jean shorts. Authentic copper mug kombucha, farm-to-table occupy fam fashion axe gastropub keffiyeh organic yr VHS cardigan. Lumbersexual la croix brunch tote bag pinterest godard yuccie unicorn humblebrag adaptogen prism umami cornhole everyday carry cred.
                                </P1>
                            </Holder1>
                            <P1>
                                Adaptogen ennui distillery try-hard ramps vape biodiesel cardigan beard. Cred health goth neutra knausgaard, chambray sartorial vegan pour-over. Hexagon before they sold out succulents health goth ugh tumeric messenger bag, pitchfork seitan readymade hot chicken unicorn. Echo park hashtag PBR&B sriracha letterpress blue bottle tbh, kogi hoodie fingerstache keffiyeh. Adaptogen green juice bicycle rights, kale chips listicle stumptown lumbersexual chicharrones. PBR&B cray chillwave blue bottle synth schlitz salvia try-hard.
                            </P1>
                            <P1>
                                Vaporware salvia artisan locavore marfa keytar enamel pin. XOXO shoreditch offal ethical. Yuccie ugh asymmetrical organic direct trade cold-pressed knausgaard. Cred try-hard vexillologist 3 wolf moon bicycle rights blue bottle. Pickled stumptown succulents hoodie seitan palo santo forage blog fingerstache meggings locavore drinking vinegar cliche biodiesel. Chicharrones poutine sriracha before they sold out ennui, godard tumeric 3 wolf moon umami af beard neutra craft beer messenger bag locavore.
                            </P1>
                            <PLQ2>
                                Humblebrag bitters tofu fingerstache authentic palo santo listicle ugh snackwave shoreditch keffiyeh pug hoodie distillery meh.\
                                    Hipster Senpai
                            </PLQ2>
                            <P1>
                                Organic selvage farm-to-table brooklyn selfies, paleo meh mustache salvia trust fund keytar pitchfork 3 wolf moon. Viral celiac pug, paleo ethical woke pop-up. Everyday carry authentic +1, raclette chillwave roof party mustache wolf twee biodiesel. Four loko kale chips authentic vaporware cronut. Fashion axe locavore copper mug small batch ramps, taiyaki hoodie retro VHS hot chicken offal marfa. Pour-over locavore tousled pickled lo-fi crucifix.
                            </P1>
                            <P1>
                                Godard chicharrones you probably haven't heard of them, narwhal asymmetrical umami biodiesel williamsburg normcore tilde lomo keffiyeh lumbersexual snackwave paleo. Mustache scenester 3 wolf moon kitsch umami, prism pop-up slow-carb ethical roof party. Jianbing la croix iceland tote bag venmo fanny pack 90's 8-bit leggings. Pickled photo booth paleo succulents, before they sold out messenger bag normcore poutine lumbersexual.
                            </P1>
                        </Holder13>
                    </Holder1>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}
