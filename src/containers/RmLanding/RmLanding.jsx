import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { COUNTRIES } from '../../constants/Urls';
import { getCountries, setSelectedCountry } from '../../actions';

class RmLanding extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  /**
   *
   * @return {void}
   */
  componentWillMount() {

    if (!this.props.countries.length) {
      this.props.dispatch(getCountries(`${COUNTRIES}/all`));
    }

  }

  render () {

    const { selectedCountry, countries } = this.props;

    return (
      <div className='RmLanding d-flex flex-column align-items-center justify-content-center'>
        <h1>Movie Search</h1>
        <form className="text-center col-md-4">
          <div className="form-group">
            <label htmlFor="countries">Select a Country</label>
            <select
              value={selectedCountry}
              className="form-control"
              onChange={this.handleChange}>
              {countries.map(({ name }) => (
                <option
                  id="countries"
                  key={name}
                  value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </form>
        <Link to="movies">
          <button type="button" className="btn btn-primary">
            See all movies
          </button>
        </Link>
      </div>
    );
  }

  /**
   *
   * @param {SyntheticEvent} evt
   * @return {void}
   */
  handleChange(evt) {
    const selectedCountry = evt.target.value;
    this.props.dispatch(setSelectedCountry(selectedCountry));
  }

}

const mapStateToProps = (state) => ({
  selectedCountry: state.selectedCountry,
  countries: state.countries
});

export default connect(mapStateToProps)(RmLanding);