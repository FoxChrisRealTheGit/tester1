import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Container1 from './Components 1.0.0/Containers';
import Holder1 from './Components 1.0.0/Holders';

import { Brand1, Navbar1 } from './Components 1.0.0/Blocks';

import StoreHolder, { AddToCart, RemoveFromCart, Cart1 } from './Components 1.0.0/ECommerceBlocks';

export default class Testing12 extends Component {

    render() {
        return (
            <section>
                {/* <Container1>
                    <Holder1>
                        <StoreHolder addid={1} />
                        <RemoveFromCart id={1} />
                    </Holder1>
                </Container1>
                <Container1>
                    <Holder1>
                        <StoreHolder addid={2} />
                        <RemoveFromCart id={2} />
                    </Holder1>
                </Container1>
                <Container1>
                    <Holder1>
                        <StoreHolder addid={3} />
                        <RemoveFromCart id={3} />
                    </Holder1>
                </Container1>
                <Container1>
                    <Holder1>
                        <AddToCart product={4} />
                        <RemoveFromCart id={4} />
                    </Holder1>
                </Container1>
                <Container1>
                    <Cart1 />
                </Container1> */}
            </section>
        )
    }
}