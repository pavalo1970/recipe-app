import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { App } from './App';

// Import the global styles for the application
import './styles/index.scss';

// Render the App component into the root element of the HTML document
ReactDOM.render(
  <React.StrictMode>
  {/* The main entry point of the application */}
  <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
  // The element with the id 'root' in the HTML where the app will be rendered
  document.getElementById('root')
);









