import React, {Component, PropTypes} from 'react';

import {Header} from './header';
import {Footer} from './footer';

class BaseStructure extends Component {
  render() {
    return (
      <div className="rz">
        <Header/>
        <main className="container">
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );
  }
}

BaseStructure.propTypes = {
  children: PropTypes.object.isRequired
};

export default BaseStructure;
