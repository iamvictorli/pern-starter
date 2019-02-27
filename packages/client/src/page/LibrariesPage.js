import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLibraries } from '../redux/reducer/libraryReducer';

export class LibrariesPage extends React.Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    const { fetchLibraries } = this.props;
    await fetchLibraries();

    this.setState({
      loading: false
    });
  }

  render() {
    const { loading } = this.state;
    const { libraries } = this.props;

    const libraryList = libraries.map(library => (
      <li key={library.id}>{library.libraryname}</li>
    ));

    return (
      <React.Fragment>
        <h1>Libraries Used</h1>
        {loading ? <p>Loading...</p> : <ul>{libraryList}</ul>}
      </React.Fragment>
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
