import React from 'react';
import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';
import { Holder6 } from '../Components 1.0.0/Holders';
import { SubHeading4, Navbar1, NavbarTest1, SquareImage } from '../Components 1.0.0/Blocks';

import Logo from '../images/Logo/QuickFirstDraft.svg';

export default function Navigation() {
    return (
        <header>
            <Container1>
                <Holder6>
                <Link to="/">
                    <SquareImage>
                        {Logo}
                    </SquareImage>
                    </Link>
                    <SubHeading4>
                        Stylux
                    </SubHeading4>
                    <Navbar1
                        fontVariant="small-caps"
                        navbarWidth='80%'>
                        <Link to="/containers">containers</Link>
                        <Link to="/holders">holders</Link>
                        <Link to="/blocks">blocks</Link>
                        <Link to="/samplepages">sample pages</Link>
                        <Link to="/templatesamples">template samples</Link>
                    </Navbar1>
                </Holder6>
            </Container1>
        </header>
    )
}