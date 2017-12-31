import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarTest1, SquareImage2 } from '../Component/Blocks';

import Container1 from '../Components 1.0.0/Containers';
import { Holder6 } from '../Components 1.0.0/Holders';

import { SubHeading4, Navbar1 } from '../Components 1.0.0/Blocks';

import Logo from '../images/Logo/QuickFirstDraft.svg';

export default function Navigation() {
    return (
        <header>
            <Container1>
                <Holder6>
                <Link to="/">
                    <SquareImage2>
                        {Logo}
                    </SquareImage2>
                    </Link>
                    <SubHeading4>
                        Stylux
                    </SubHeading4>
                    <Navbar1>
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