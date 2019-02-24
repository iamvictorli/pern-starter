import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLibraries } from '../redux/reducer/libraryReducer';

class LibrariesPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { fetchLibraries } = this.props;
    fetchLibraries().then(() => {
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { loading } = this.state;
    const { libraries } = this.props;

    const libraryList = libraries.map(library => (
      <li key={library.id}>{library.libraryname}</li>
    ));

    return (
      <div>
        <h1>Libraries Used</h1>
        {loading ? <p>Loading...</p> : <ul>{libraryList}</ul>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    libraries: state.library
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchLibraries: getLibraries }, dispatch);
}

LibrariesPage.propTypes = {
  fetchLibraries: PropTypes.func.isRequired,
  libraries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      libraryname: PropTypes.string.isRequired
    })
  ).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LibrariesPage);
