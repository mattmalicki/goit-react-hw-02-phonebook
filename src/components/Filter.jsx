import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return <input type="text" onChange={filter} />;
  }
}
