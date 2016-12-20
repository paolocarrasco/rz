import React, {Component} from 'react';

export class Header extends Component {

  constructor() {
    super();
    this.title = 'RZ: Peruvian Recipes';
  }

  render() {
    return (
      <h1>
        <img src="https://www.shareicon.net/data/54x54/2016/08/18/813449_knife_512x512.png" alt="RZ logo"></img>
        {this.title}
      </h1>
    );
  }

}
