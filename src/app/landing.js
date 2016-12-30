import React, {Component} from 'react';

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // eslint-disable-next-line no-alert
    alert(`A name was submitted: ${this.state.value}`);
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
            value={this.state.value}
            onChange={this.handleChange}
            />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}
