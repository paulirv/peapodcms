import { h, render } from 'preact';
import App from './app.jsx';

// Ensure the DOM element exists before rendering
const rootElement = document.getElementById('app');
if (rootElement) {
  render(<App />, rootElement);
} else {
  console.error('No root element found with ID "app". Rendering aborted.');
}