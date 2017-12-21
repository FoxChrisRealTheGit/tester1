import React, { Component } from 'react';
import './App.css';

import Container1 from '../src/Components/Containers/Containers';
import Holder1 from './Components/Blocks/Blocks';
import Block1 from './Components/Holders/Holders';


class App extends Component {
  render() {
    return (
      <section>
        <Container1>
          <Holder1>
            0
            <Block1 />
          </Holder1>
        </Container1>
      </section>
    );
  }
}

export default App;
