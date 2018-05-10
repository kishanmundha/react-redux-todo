import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import {
  teal as primary,
  pink as secondary,
  red as error
} from 'material-ui/colors';

import store from './reducers';
import Todo from './pages/Todo';

// Customize theme
const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    error,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Todo />
    </Provider>
  </MuiThemeProvider>
);

export default App;
