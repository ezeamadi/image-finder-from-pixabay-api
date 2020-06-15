import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import NavBar from "./component/navbar"
import Search from "./component/search"

import './App.css';

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
