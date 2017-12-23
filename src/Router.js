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

//21-30

//30-40


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
        <Route path="/blocks" component={BlockView}></Route>
    </Switch>
)