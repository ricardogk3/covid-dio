import React from "react";
import {StylesProvider} from '@material-ui/styles'
import GlobalStyle from './commons/constants/styles/global-styles'
import { CssBaseline } from "../node_modules/@material-ui/core/index"
import Main from './containers/Main';

function App() {
  return (
    <div className="App">
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <Main />
      </StylesProvider>
    </div>
  );
}

export default App;
