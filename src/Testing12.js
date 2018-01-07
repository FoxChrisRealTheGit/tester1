import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container1 from './Components 1.0.0/Containers';
import { Holder2 } from './Components 1.0.0/Holders';

import { Brand1, Navbar1 } from './Components 1.0.0/Blocks';

export default class Testing12 extends Component {

    render() {
        return (
            <section>
                <Container1>
                    <Holder2
                        alignBlock1="flex-end"
                        block2='4'>
                        <Brand1>
                        </Brand1>
                        <Navbar1
                            align="flex-start"
                            navbarWidth="50%">
                            <Link to="">home</Link>
                            <Link to="">about</Link>
                            <Link to="">contact</Link>
                        </Navbar1>
                        <Navbar1
                            align="flex-end"
                            navbarWidth="40%">
                            <Link to="facebook.com"></Link>
                            <Link to="twitter.com"></Link>
                            <Link to="linkedin.com"></Link>
                        </Navbar1>
                    </Holder2>
                </Container1>
            </section>
        )
    }
}