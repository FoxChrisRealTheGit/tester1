import React from 'react';
import { Switch, Route } from 'react-router';

//Begin Router Imports
//import all main components
import ContainerView from './Displays/ContainerView';
import HolderView from './Displays/HolderViews';
import BlockView from './Displays/BlocksView';

//Holder Views
//1-10
import Holder1View from './Displays/Holders/1-10/Holder1View';
import Holder2View from './Displays/Holders/1-10/Holder2View';
import Holder3View from './Displays/Holders/1-10/Holder3View';
import Holder4View from './Displays/Holders/1-10/Holder4View';
import Holder5View from './Displays/Holders/1-10/Holder5View';
import Holder6View from './Displays/Holders/1-10/Holder6View';
import Holder7View from './Displays/Holders/1-10/Holder7View';
import Holder8View from './Displays/Holders/1-10/Holder8View';
import Holder9View from './Displays/Holders/1-10/Holder9View';
import Holder10View from './Displays/Holders/1-10/Holder10View';
//11-20
import Holder11View from './Displays/Holders/11-20/Holder11View';
import Holder12View from './Displays/Holders/11-20/Holder12View';
import Holder13View from './Displays/Holders/11-20/Holder13View';
import Holder14View from './Displays/Holders/11-20/Holder14View';
import Holder15View from './Displays/Holders/11-20/Holder15View';
import Holder16View from './Displays/Holders/11-20/Holder16View';
import Holder17View from './Displays/Holders/11-20/Holder17View';
import Holder18View from './Displays/Holders/11-20/Holder18View';
import Holder19View from './Displays/Holders/11-20/Holder19View';
import Holder20View from './Displays/Holders/11-20/Holder20View';
//21-30
import Holder21View from './Displays/Holders/21-30/Holder21View';
import Holder22View from './Displays/Holders/21-30/Holder22View';
import Holder23View from './Displays/Holders/21-30/Holder23View';
import Holder24View from './Displays/Holders/21-30/Holder24View';
import Holder25View from './Displays/Holders/21-30/Holder25View';
import Holder26View from './Displays/Holders/21-30/Holder26View';
import Holder27View from './Displays/Holders/21-30/Holder27View';
import Holder28View from './Displays/Holders/21-30/Holder28View';
import Holder29View from './Displays/Holders/21-30/Holder29View';
import Holder30View from './Displays/Holders/21-30/Holder30View';
//30-40
import Holder31View from './Displays/Holders/31-40/Holder31View';
import Holder32View from './Displays/Holders/31-40/Holder32View';

//41-50

//Block Views
import ButtonBlocksView from './Displays/Blocks/ButtonBlocksView';
import HeadingBlocksView from './Displays/Blocks/HeadingBlocksView';
import ImageBlocksView from './Displays/Blocks/ImageBlocksView';
import NavBarBlocksView from './Displays/Blocks/NavBarBlocksView';
import ParagraphBlocksView from './Displays/Blocks/ParagraphBlocksView';

//page sample views
import SamplePagesMain from './Displays/Sample Pages/SamplePagesMain';

import SampleAboutPage1 from './Displays/Sample Pages/AboutPage/SampleAboutPage1';
import SampleAboutPage2 from './Displays/Sample Pages/AboutPage/SampleAboutPage2';

import SampleBlogPost1 from './Displays/Sample Pages/Blog Post/SampleBlogPost1';
import SampleBlogPost2 from './Displays/Sample Pages/Blog Post/SampleBlogPost2';

import SampleContactPage1 from './Displays/Sample Pages/ContactPage/SampleContactPage1';
import SampleContactPage2 from './Displays/Sample Pages/ContactPage/SampleContactPage2';

import SampleHomePage1 from './Displays/Sample Pages/HomePage/SampleHomePage1';
import SampleHomePage2 from './Displays/Sample Pages/HomePage/SampleHomePage2';

import SampleProductPage1 from './Displays/Sample Pages/ProductPage/SampleProductPage1';
import SampleProductPage2 from './Displays/Sample Pages/ProductPage/SampleProductsPage2';

//template samples
import TemplateSamplesMain from './Displays/Template Samples/TemplateSamplesMain';

import AppShowcase1Main from './Displays/Template Samples/App Showcase/AppShowcase1/AppShowcase1Main';
import AppShowcase2Main from './Displays/Template Samples/App Showcase/AppShowcase2/AppShowcase2Main';
import AppShowcase3Main from './Displays/Template Samples/App Showcase/AppShowcase3/AppShowcase3Main';
import AppShowcase4Main from './Displays/Template Samples/App Showcase/AppShowcase4/AppShowcase4Main';
import AppShowcase5Main from './Displays/Template Samples/App Showcase/AppShowcase5/AppShowcase5Main';

import Blog1Main from './Displays/Template Samples/Blogs/Blog1/Blog1Main';
import Blog2Main from './Displays/Template Samples/Blogs/Blog2/Blog2Main';
import Blog3Main from './Displays/Template Samples/Blogs/Blog3/Blog3Main';
import Blog4Main from './Displays/Template Samples/Blogs/Blog4/Blog4Main';
import Blog5Main from './Displays/Template Samples/Blogs/Blog5/Blog5Main';

import ECommerce1Main from './Displays/Template Samples/ECommerce/ECommerce1/ECommerce1Main';
import ECommerce2Main from './Displays/Template Samples/ECommerce/ECommerce2/ECommerce2Main';
import ECommerce3Main from './Displays/Template Samples/ECommerce/ECommerce3/ECommerce3Main';
import ECommerce4Main from './Displays/Template Samples/ECommerce/ECommerce4/ECommerce4Main';
import ECommerce5Main from './Displays/Template Samples/ECommerce/ECommerce5/ECommerce5Main';

import Portfolio1Main from './Displays/Template Samples/Portfolio/Portfolio1/Portfolio1Main';
import Portfolio2Main from './Displays/Template Samples/Portfolio/Portfolio2/Portfolio2Main';
import Portfolio3Main from './Displays/Template Samples/Portfolio/Portfolio3/Portfolio3Main';
import Portfolio4Main from './Displays/Template Samples/Portfolio/Portfolio4/Portfolio4Main';
import Portfolio5Main from './Displays/Template Samples/Portfolio/Portfolio5/Portfolio5Main';


//End Router Imports
//Begin Router
export default (
    <Switch>
        <Route exact path="/" component={ContainerView}></Route>
        <Route exact path="/holders" component={HolderView}></Route>

        <Route path="/holders/holder1" component={Holder1View}></Route>
        <Route path="/holders/holder2" component={Holder2View}></Route>
        <Route path="/holders/holder3" component={Holder3View}></Route>
        <Route path="/holders/holder4" component={Holder4View}></Route>
        <Route path="/holders/holder5" component={Holder5View}></Route>
        <Route path="/holders/holder6" component={Holder6View}></Route>
        <Route path="/holders/holder7" component={Holder7View}></Route>
        <Route path="/holders/holder8" component={Holder8View}></Route>
        <Route path="/holders/holder9" component={Holder9View}></Route>
        <Route path="/holders/holder10" component={Holder10View}></Route>

        <Route path="/holders/holder11" component={Holder11View}></Route>
        <Route path="/holders/holder12" component={Holder12View}></Route>
        <Route path="/holders/holder13" component={Holder13View}></Route>
        <Route path="/holders/holder14" component={Holder14View}></Route>
        <Route path="/holders/holder15" component={Holder15View}></Route>
        <Route path="/holders/holder16" component={Holder16View}></Route>
        <Route path="/holders/holder17" component={Holder17View}></Route>
        <Route path="/holders/holder18" component={Holder18View}></Route>
        <Route path="/holders/holder19" component={Holder19View}></Route>
        <Route path="/holders/holder20" component={Holder20View}></Route>

        <Route path="/holders/holder21" component={Holder21View}></Route>
        <Route path="/holders/holder22" component={Holder22View}></Route>
        <Route path="/holders/holder23" component={Holder23View}></Route>
        <Route path="/holders/holder24" component={Holder24View}></Route>
        <Route path="/holders/holder25" component={Holder25View}></Route>
        <Route path="/holders/holder26" component={Holder26View}></Route>
        <Route path="/holders/holder27" component={Holder27View}></Route>
        <Route path="/holders/holder28" component={Holder28View}></Route>
        <Route path="/holders/holder29" component={Holder29View}></Route>
        <Route path="/holders/holder30" component={Holder30View}></Route>

        <Route path="/holders/holder31" component={Holder31View}></Route>
        <Route path="/holders/holder32" component={Holder32View}></Route>

        <Route exact path="/blocks" component={BlockView}></Route>
        <Route path="/blocks/buttonviews" component={ButtonBlocksView}></Route>
        <Route path="/blocks/headingviews" component={HeadingBlocksView}></Route>
        <Route path="/blocks/imageviews" component={ImageBlocksView}></Route>
        <Route path="/blocks/navbarviews" component={NavBarBlocksView}></Route>
        <Route path="/blocks/paragraphviews" component={ParagraphBlocksView}></Route>

        <Route exact path="/samplepages" component={SamplePagesMain}></Route>
        <Route path="/samplepages/about1" component={SampleAboutPage1}></Route>
        <Route path="/samplepages/about2" component={SampleAboutPage2}></Route>
        <Route path="/samplepages/blog1" component={SampleBlogPost1}></Route>
        <Route path="/samplepages/blog2" component={SampleBlogPost2}></Route>
        <Route path="/samplepages/contact1" component={SampleContactPage1}></Route>
        <Route path="/samplepages/contact2" component={SampleContactPage2}></Route>
        <Route path="/samplepages/home1" component={SampleHomePage1}></Route>
        <Route path="/samplepages/home2" component={SampleHomePage2}></Route>
        <Route path="samplepages/product1" component={SampleProductPage1}></Route>
        <Route path="/samplepages/product2" component={SampleProductPage2}></Route>
        
        <Route exact path="/templatesamples" component={TemplateSamplesMain}></Route>

        <Route path="/templatesamples/appshowcase1" component={AppShowcase1Main}></Route>
        <Route path="/templatesamples/appshowcase2" component={AppShowcase2Main}></Route>
        <Route path="/templatesamples/appshowcase3" component={AppShowcase3Main}></Route>
        <Route path="/templatesamples/appshowcase4" component={AppShowcase4Main}></Route>
        <Route path="/templatesamples/appshowcase5" component={AppShowcase5Main}></Route>

        <Route path="/templatesamples/blog1" component={Blog1Main}></Route>
        <Route path="/templatesamples/blog2" component={Blog2Main}></Route>
        <Route path="/templatesamples/blog3" component={Blog3Main}></Route>
        <Route path="/templatesamples/blog4" component={Blog4Main}></Route>
        <Route path="/templatesamples/blog5" component={Blog5Main}></Route>

        <Route path="/templatesamples/ecommerce1" component={ECommerce1Main}></Route>
        <Route path="/templatesamples/ecommerce2" component={ECommerce2Main}></Route>
        <Route path="/templatesamples/ecommerce3" component={ECommerce3Main}></Route>
        <Route path="/templatesamples/ecommerce4" component={ECommerce4Main}></Route>
        <Route path="/templatesamples/ecommerce5" component={ECommerce5Main}></Route>

        <Route path="/templatesamples/portfolio1" component={Portfolio1Main}></Route>
        <Route path="/templatesamples/portfolio2" component={Portfolio2Main}></Route>
        <Route path="/templatesamples/portfolio3" component={Portfolio3Main}></Route>
        <Route path="/templatesamples/portfolio4" component={Portfolio4Main}></Route>
        <Route path="/templatesamples/portfolio5" component={Portfolio5Main}></Route>

    </Switch>
)