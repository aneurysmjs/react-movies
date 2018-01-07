import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovie } from '../../actions';

import Header from '../../components/RmHeader/RmHeader';
import RmMovie from '../../components/RmMovie/RmMovie';

class RmMovieDetails extends Component {

  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(getMovie('1'));
  }

  render() {

    const { movie } = this.props;

    return (
      <div>
        <Header />
        <div className="movieDetails d-flex flex-column align-items-center justify-content-center">
          <RmMovie {...movie} />
        </div>
      </div>
    );

  }
  
}

const mapStateToProps = (state) => ({
  movie: state.movie
});

export default connect(mapStateToProps)(RmMovieDetails);