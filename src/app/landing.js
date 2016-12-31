import React, {Component} from 'react';

export class Landing extends Component {
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
    // eslint-disable-next-line no-alert
    alert(`A name was submitted: ${this.state.query}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter the query"
            value={this.state.query}
            onChange={this.handleChange}
            />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
