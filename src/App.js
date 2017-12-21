import React, { Component } from 'react';
import './App.css';

import Container1 from '../src/Components/Containers/Containers';
import Holder1 from './Components/Holders/Holders';
import Block1 from './Components/Blocks/Blocks';


class App extends Component {
  render() {
    return (
      <section>
        <Container1>
          <Holder1>
            <Block1>
              "I'm Block 1"
              </Block1>
              <Block1>
              "I'm Block 2"
              </Block1>
              
          </Holder1>
        </Container1>
      </section>
    );
  }
}

export default App;
