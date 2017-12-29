import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// import main CSS styles
import './assets/scss/styles.scss';
import movies from './assets/json/movies.json';

import RmLanding from './containers/RmLanding/RmLanding';
import RmMovies from './containers/RmMovies/RmMovies';
import RmMovieDetails from './containers/RmMovieDetails/RmMovieDetails';
import RmFooter from './components/RmFooter/RmFooter';

class MainComponent extends React.Component {

  render() {
    return (
      <Router>
        <main>
          <div>
            <Route exact path="/" component={RmLanding} />
            <Route
              path="/movies"
              component={props => <RmMovies movies={movies} {...props} />}
            />
            <Route
              path="/details/:id"
              component={props => {
                const { match: { params } } = props;
                const movie = movies.filter(({ id }) => +params.id === id)[0];
                return <RmMovieDetails movie={movie} {...props} />;
              }}
            />
          </div>
          <RmFooter />
        </main>
      </Router>
    );
  }
  
}

ReactDom.render(<MainComponent />, document.querySelector('#app'));