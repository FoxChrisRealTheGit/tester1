import React, { Component } from 'react';

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
