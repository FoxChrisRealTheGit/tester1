import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

import { NavbarTest1 } from '../Component/Blocks';

export default function navigation() {
    return (
        <NavbarTest1>
            <Link to="/">Containers</Link>
            <Link to="/holders">Holders</Link>
            <Link to="/blocks">Blocks</Link>
            <Link to="/samplepages">Sample Pages</Link>
            <Link to="/templatesamples">Template Samples</Link>
        </NavbarTest1>
    )
}