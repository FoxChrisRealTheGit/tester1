import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import FooterNavigation from '../FooterNavigation';

import Container1 from '../../Components 1.0.0/Containers';
import {
    H11,
    H21,
    HorizontalTestBlock1,
    SubNavbar1,
    H34,
    P1,
    P2,
    P3,
    P4,
    P5,
    PLQ1,
    PLQ2,
} from '../../Components 1.0.0/Blocks';

export default class ParagraphBlocksView extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <HorizontalTestBlock1 />
                <Container1>
                    <H11>
                        Paragraphs
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
                    <H21>
                        Default: Serif
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        P1
                    </H34>
                </Container1>
                <Container1>
                    <P1>
                        Pabst vice flannel semiotics, typewriter ethical cliche echo park cred. Mlkshk single-origin coffee man bun whatever. Chillwave unicorn pickled normcore kickstarter migas heirloom. Cloud bread synth plaid kogi vegan tilde disrupt salvia bespoke brunch. Live-edge prism post-ironic letterpress, put a bird on it palo santo direct trade flannel kitsch 90's.
                    </P1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        P2
                    </H34>
                </Container1>
                <Container1>
                    <P2>
                        Vinyl gochujang irony, microdosing synth VHS mlkshk keytar mumblecore kale chips roof party meggings cliche. Shoreditch unicorn artisan single-origin coffee. Tattooed asymmetrical umami vegan. Mixtape kombucha bicycle rights vice mustache pop-up photo booth af woke pour-over raw denim fashion axe. Readymade green juice bespoke, migas shabby chic hexagon fingerstache. Iceland stumptown activated charcoal YOLO schlitz keffiyeh jean shorts butcher mumblecore. Retro stumptown seitan mustache.
                    </P2>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        P3
                    </H34>
                </Container1>
                <Container1>
                    <P3>
                        Humblebrag whatever vinyl umami, flexitarian glossier seitan meditation celiac sriracha enamel pin. Echo park XOXO seitan, fixie before they sold out bushwick edison bulb listicle 3 wolf moon irony hot chicken typewriter dreamcatcher. Fixie shaman truffaut marfa, listicle four loko iceland snackwave banjo lomo glossier stumptown. Jean shorts jianbing mlkshk, prism asymmetrical godard fashion axe.
                    </P3>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        P4
                    </H34>
                </Container1>
                <Container1>
                    <P4>
                        Retro blue bottle succulents, shoreditch subway tile blog skateboard cray butcher flannel meditation marfa jianbing hashtag. Activated charcoal readymade iceland, tousled health goth green juice lumbersexual live-edge hexagon helvetica church-key edison bulb listicle ugh subway tile. Gluten-free wolf blue bottle, kale chips salvia bushwick selfies vaporware pour-over farm-to-table art party jean shorts af twee tote bag. Pickled waistcoat offal fingerstache butcher selvage. Snackwave vinyl mustache chicharrones tacos shabby chic activated charcoal tousled tumblr. Organic occupy lomo fanny pack cardigan twee tousled. Food truck fingerstache cold-pressed blog la croix church-key.
                    </P4>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        P5
                    </H34>
                </Container1>
                <Container1>
                    <P5>
                        Banjo photo booth deep v bespoke typewriter twee iPhone lyft vegan meditation mumblecore copper mug blog whatever. Beard typewriter blog etsy austin kogi twee farm-to-table umami retro tattooed butcher shoreditch snackwave. Jean shorts godard beard thundercats, bushwick irony drinking vinegar listicle snackwave artisan. Chambray craft beer venmo, roof party chillwave health goth air plant freegan. Distillery craft beer wolf, kogi church-key next level scenester squid kale chips ramps twee man bun chartreuse fam heirloom. Four loko tumeric messenger bag hashtag etsy, master cleanse woke chicharrones squid viral coloring book tacos direct trade.
                    </P5>
                </Container1>
                <HorizontalTestBlock1 />
                <HorizontalTestBlock1 />
                <Container1>
                    <H21>
                        Pull Quotes
                    </H21>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Pull Quote 1
                    </H34>
                </Container1>
                <Container1>
                    <PLQ1>
                        {'Banjo photo booth deep v bespoke typewriter twee iPhone lyft vegan meditation mumblecore copper mug blog whatever.'}
                        {'Neat Name'}
                    </PLQ1>
                </Container1>
                <HorizontalTestBlock1 />
                <Container1>
                    <H34>
                        Pull Quote 2
                    </H34>
                </Container1>
                <Container1>
                    <PLQ2>
                        {'Echo park XOXO seitan, fixie before they sold out bushwick edison bulb listicle 3 wolf moon irony hot chicken typewriter dreamcatcher.'}
                        {'Neat Name'}
                    </PLQ2>
                </Container1>
                <HorizontalTestBlock1 />
                <FooterNavigation />
            </section>
        )
    }
}