import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../../Navigation';

import { SubNavbar1 } from '../../../../Component/Blocks';

export default class AppShowcase5Main extends Component {
    render() {
        return (
            <section>
                <Navigation />
                <SubNavbar1>
                    <Link to="/templatesamples/appshowcase1">app 1</Link>
                    <Link to="/templatesamples/appshowcase2">app 2</Link>
                    <Link to="/templatesamples/appshowcase3">app 3</Link>
                    <Link to="/templatesamples/appshowcase4">app 4</Link>
                    <Link to="/templatesamples/appshowcase5">app 5</Link>
                </SubNavbar1>
            </section>
        )
    }
}