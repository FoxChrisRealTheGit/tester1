import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container3 } from '../Components 1.0.0/Containers';
import Holder1 from '../Components 1.0.0/Holders';
import { Paragraph2, Navbar1 } from '../Components 1.0.0/Blocks';

export default class FooterNavigation extends Component {

    render() {
        return (
            <footer>
                <Container3>
                    <Navbar1
                        navbarWidth='75%'>
                        <Link to="facebook.com"></Link>
                        <Link to="twitter.com"></Link>
                        <Link to="github.com"></Link>
                        <Link to="instagram.com"></Link>
                    </Navbar1>
                    <Holder1
                        justifyBlock2="flex-start">
                        <Navbar1
                            direction="column"
                            padding="0 10px 0 0"
                            fontSize="0.7em">
                            Elements
                            <Link to="/containers">Containers</Link>
                            <Link to="/holders">Holders</Link>
                            <Link to="/blocks">Blocks</Link>
                        </Navbar1>
                        <Navbar1
                            direction="column"
                            padding="0 0 0 10px"
                            fontSize="0.7em">
                            Examples
                            <Link to="/samplepages">Sample Pages</Link>
                            <Link to="/templatesamples">Template Samples</Link>
                        </Navbar1>
                    </Holder1>
                    <Paragraph2>
                        Copyright 2018 Some Design Agency
                    </Paragraph2>
                </Container3>
            </footer>
        )
    }
}