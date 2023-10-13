import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    const { filter } = this.props;
    return <input type="text" onChange={filter} />;
  }
}

Filter.propTypes = {
  filter: PropTypes.func,
};
