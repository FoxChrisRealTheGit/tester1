import React from 'react';
import { Link } from 'react-router-dom';

import { NavbarTest1, SquareImage2 } from '../Component/Blocks';

import Container1 from '../Component/Containers';
import { Holder5 } from '../Component/Holders';

import { SubHeading3, Navbar1 } from '../Component/Blocks';

import Logo from '../images/Logo/QuickFirstDraft.svg';

export default function Navigation() {
    return (
        <header>
            <Container1>
                <Holder5>
                    <SquareImage2>
                        {Logo}
                    </SquareImage2>
                    <SubHeading3>
                        Stylux
                    </SubHeading3>
                    <Navbar1>
                        <Link to="/">containers</Link>
                        <Link to="/holders">holders</Link>
                        <Link to="/blocks">blocks</Link>
                        <Link to="/samplepages">sample pages</Link>
                        <Link to="/templatesamples">template samples</Link>
                    </Navbar1>
                </Holder5>
            </Container1>
        </header>
    )
}