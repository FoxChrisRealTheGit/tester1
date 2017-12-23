import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import router from './Router'

class App extends Component {
    render() {
        return (
            <section>
                {router}
            </section>
        );
    }
}

export default App;
