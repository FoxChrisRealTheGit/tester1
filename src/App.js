import React, { Component } from 'react';
import './App.css';

import Container1, { Container2 } from '../src/Components/Containers/Containers';
import Holder1 from './Components/Holders/Holders';
import Block1, { Jumbotron1, GiantRedBlock } from './Components/Blocks/Blocks';


import './Styles/ownStyles.css';

class App extends Component {
  render() {
    const navbar = ['Home', 'About', 'Resume', 'Portfolio', 'Contact Us']
    const jumbotron = ['http://www.petsworld.in/blog/wp-content/uploads/2014/09/cute-kittens.jpg', 'a bunch of cats']
    return (
      <section>
        <Container2>
          {navbar}
        </Container2>
        <Jumbotron1>
          {jumbotron}
        </Jumbotron1>
        <Container1>
          <Block1>
            <h1 className="heading">Everything you ever wanted to know about cats!!!</h1>
          </Block1>
        </Container1>
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

        <Container1>
          <Holder1>
            <GiantRedBlock />
            <Holder1>
              <Block1>
                  I'm a cool block
              </Block1>
              <Block1>
                  I am also a cool block
              </Block1>
            </Holder1>
          </Holder1>
        </Container1>
      </section>
    );
  }
}

export default App;
