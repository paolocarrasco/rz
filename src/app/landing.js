import React, {Component} from 'react';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
          <label htmlFor="query">
            Enter the query here
          </label>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            id="query"
            />
        </div>
        <button className="waves-effect waves-light btn" type="submit">Search</button>
      </form>
    );
  }
}
