import React from 'react';
import { Link } from 'react-router-dom';

import Container1 from '../Components 1.0.0/Containers';
import { Holder2 } from '../Components 1.0.0/Holders';
import { Navbar1, DropDownNav1, Brand1 } from '../Components 1.0.0/Blocks';

import Logo from '../images/Logo/QuickFirstDraft.svg';

export default function Navigation() {
    return (
        <header>
            <Container1>
                <Holder2
                    alignBlock1="flex-end"
                    block1="0.5"
                    block2="3">
                    <Link to="/">
                        <Brand1>
                            {Logo}
                            Stylux
                        </Brand1>
                    </Link>
                    <Navbar1
                        fontVariant="small-caps"
                        navbarWidth='80%'
                        align="flex-start">
                        <DropDownNav1
                            background='white'>
                            components
                            <Link to="/containers">containers</Link>
                            <Link to="/holders">holders</Link>
                            <Link to="/blocks">blocks</Link>
                        </DropDownNav1>
                        <DropDownNav1
                            background="white">
                            examples
                            <Link to="/samplepages">sample pages</Link>
                            <Link to="/templatesamples">template samples</Link>
                        </DropDownNav1>
                        <Link to="/documentation">documentation</Link>
                        <Link to="/contact">contact</Link>
                    </Navbar1>
                    <Navbar1
                        navbarWidth="50%"
                        align="flex-end">
                        <Link to="facebook.com"></Link>
                        <Link to="twitter.com"></Link>
                        <Link to="github.com"></Link>
                    </Navbar1>
                </Holder2>
            </Container1>
        </header>
    )
}