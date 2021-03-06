import React from 'react';
import { Switch, Route } from 'react-router';

//Begin Router Imports
//import all main components
import LandingPage from './Displays/LandingPage';
import ContainerViewMain from './Displays/ContainerViews/ContainerView';

import HolderView from './Displays/HolderViews';
import BlockView from './Displays/BlocksView';

import Contact from './Displays/Contact';
import Donate from './Displays/Donate';
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

//Block Views
import ButtonBlocksView from './Displays/Blocks/ButtonBlocksView';
import HeadingBlocksView from './Displays/Blocks/HeadingBlocksView';
import ImageBlocksView from './Displays/Blocks/ImageBlocksView';
import NavBarBlocksView from './Displays/Blocks/NavBarBlocksView';
import ParagraphBlocksView from './Displays/Blocks/ParagraphBlocksView';
import CaroselsTickersView from './Displays/Blocks/CarouselsTickerBlocksView';
import FormBlockView from './Displays/Blocks/FormBlocksView';
import TableBlockView from './Displays/Blocks/TableBlockViews';
import ListBlockViews from './Displays/Blocks/ListBlockView';
import TogglersBlockViews from './Displays/Blocks/BinBlockViews';

//blog block views
import DisplayBlogBlockView from './Displays/Blocks/Blog/DisplayBlogBlockView';
import FeatureBlogBlocksView from './Displays/Blocks/Blog/FeatureBlogBlocksView';

//ecommerce block views
import CartView from './Displays/Blocks/ecommerce/CartView';
import FeatureProductViews from './Displays/Blocks/ecommerce/FeatureProductView';
import DisplayProductViews from './Displays/Blocks/ecommerce/ProductDisplayView';

//ecommerce views

//page sample views
import SamplePagesMain from './Displays/Sample Pages/SamplePagesMain';

import SampleAboutPage1 from './Displays/Sample Pages/AboutPage/SampleAboutPage1';
import SampleAboutPage2 from './Displays/Sample Pages/AboutPage/SampleAboutPage2';

import SampleBlogPost1 from './Displays/Sample Pages/Blog Post/SampleBlogPost1';
import SampleBlogPost2 from './Displays/Sample Pages/Blog Post/SampleBlogPost2';
import SampleBlogPost3 from './Displays/Sample Pages/Blog Post/SampleBlogPost3';
import SampleBlogPost4 from './Displays/Sample Pages/Blog Post/SampleBlogPost4';
import SampleBlogPost5 from './Displays/Sample Pages/Blog Post/SampleBlogPost5';
import SampleBlogPost6 from './Displays/Sample Pages/Blog Post/SampleBlogPost6';
import SampleBlogPost7 from './Displays/Sample Pages/Blog Post/SampleBlogPost7';

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

//documentation Links
import Documentation from './Displays/Documentation/Documentation';


import testing12 from './Testing12';
//End Router Imports
//Begin Router
export default (
    <Switch>
        <Route path="/testing12" component={testing12}></Route>

        <Route exact path="/" component={LandingPage}></Route>

        <Route exact path="/containers" component={ContainerViewMain}></Route>

        <Route path="/contact" component={Contact}></Route>
        <Route path="/donate" component={Donate}></Route>
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

        <Route exact path="/blocks" component={BlockView}></Route>
        <Route path="/blocks/buttonviews" component={ButtonBlocksView}></Route>
        <Route path="/blocks/headingviews" component={HeadingBlocksView}></Route>
        <Route path="/blocks/imageviews" component={ImageBlocksView}></Route>
        <Route path="/blocks/navbarviews" component={NavBarBlocksView}></Route>
        <Route path="/blocks/paragraphviews" component={ParagraphBlocksView}></Route>
        <Route path="/blocks/carouseltickerviews" component={CaroselsTickersView}></Route>
        <Route path="/blocks/formviews" component={FormBlockView}></Route>
        <Route path="/blocks/tableviews" component={TableBlockView}></Route>
        <Route path="/blocks/listviews" component={ListBlockViews}></Route>
        <Route path="/blocks/togglersviews" component={TogglersBlockViews}></Route>

        <Route path="/blocks/blog/featureviews" component={FeatureBlogBlocksView}></Route>
        <Route path="/blocks/blog/displayviews" component={DisplayBlogBlockView}></Route>

        <Route path="/blocks/ecommerce/cartviews" component={CartView}></Route>
        <Route path="/blocks/ecommerce/featureviews" component={FeatureProductViews}></Route>
        <Route path="/blocks/ecommerce/displayviews" component={DisplayProductViews}></Route>

        <Route exact path="/samplepages" component={SamplePagesMain}></Route>
        <Route path="/samplepages/about1" component={SampleAboutPage1}></Route>
        <Route path="/samplepages/about2" component={SampleAboutPage2}></Route>

        <Route path="/samplepages/blog1" component={SampleBlogPost1}></Route>
        <Route path="/samplepages/blog2" component={SampleBlogPost2}></Route>
        <Route path="/samplepages/blog3" component={SampleBlogPost3}></Route>
        <Route path="/samplepages/blog4" component={SampleBlogPost4}></Route>
        <Route path="/samplepages/blog5" component={SampleBlogPost5}></Route>
        <Route path="/samplepages/blog6" component={SampleBlogPost6}></Route>
        <Route path="/samplepages/blog7" component={SampleBlogPost7}></Route>

        <Route path="/samplepages/contact1" component={SampleContactPage1}></Route>
        <Route path="/samplepages/contact2" component={SampleContactPage2}></Route>
        <Route path="/samplepages/home1" component={SampleHomePage1}></Route>
        <Route path="/samplepages/home2" component={SampleHomePage2}></Route>
        <Route path="/samplepages/product1" component={SampleProductPage1}></Route>
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


        <Route path="/documentation" component={Documentation}></Route>
    </Switch>
)