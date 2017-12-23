import React from 'react';
import { Switch, Route } from 'react-router';

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

        <Route path="/blocks" component={BlockView}></Route>
    </Switch>
)