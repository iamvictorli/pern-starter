import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLibraries } from '../actions/libraries';

class LibrariesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.getLibraries().then(() => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { loading } = this.state;
    // before request, this.props.libraries is an empty object
    let { libraries } = this.props.libraries;
    if (libraries) {
      libraries = libraries.map(library => <li key={library.id}>{library.libraryname}</li>);
    }
    return (
      <div>
        <h1>Libraries Used</h1>
        {loading ? <p>Loading...</p> : <ul>{libraries}</ul>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    libraries: state.libraries
  };
}

LibrariesPage.propTypes = {
  getLibraries: PropTypes.func.isRequired,
  libraries: PropTypes.shape({
    libraries: PropTypes.shape({
      id: PropTypes.number.isRequired,
      libraryname: PropTypes.string.isRequired
    })
  }).isRequired
};

export default connect(mapStateToProps, { getLibraries })(LibrariesPage);
