import { h, Fragment } from 'preact';
import { Router } from 'preact-router';
import Page from './pages/Page';
import NotFound from './pages/NotFound';

const App = () => (
  <>
    <Router>
      <Page path="/" name="home" />
      <Page path="/about" name="about" />
      <Page path="/contact" name="contact" />
      <NotFound default />
    </Router>
  </>
);

export default App;