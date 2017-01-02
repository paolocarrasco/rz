import React, {Component} from 'react';
import {Link} from 'react-router';

export class Header extends Component {

  constructor() {
    super();
    this.title = 'RZ: Peruvian Recipes';
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <span>{this.title}</span>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">JavaScript</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }

}
