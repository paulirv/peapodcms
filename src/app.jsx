import { h, Fragment } from 'preact';
import { Router } from 'preact-router';
import Page from './pages/Page.jsx';
import NotFound from './pages/NotFound.jsx';

const App = () => (
  <Fragment>
    <Router>
      <Page path="/" name="home" />
      <Page path="/about" name="about" />
      <Page path="/contact" name="contact" />
      <NotFound default />
    </Router>
  </Fragment>
);

export default App;