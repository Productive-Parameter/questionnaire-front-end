import React from "react";
import NavigationMUI from './MUI/NavigationMUI';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import Questionnaires from './MUI/Questionnaires'

const theme = createTheme({
  palette: {
    primary: {main: '#000000', contrastText: '#FFFFFF'},
    secondary: {main: '#d3d3d3', contrastText: '#FFFFFF'},
    text: {primary: '#d3d3d3', secondary: '#000000', contrastText: '#d3d3d3'},
    action: {active: "#FFFFFF", hover: "#000000", selected: '#d32f2f'  },
    background: {default: "#FFFFFF", secondary: "#000000", contrastText: '#FFFFFF'}
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'],
    color: 'secondary'
  },
  overrides: {},
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <NavigationMUI />
        <Switch>
          <Route exact path='/'></Route>
          <Route exact path='/etusivu'></Route>
          <Route exact path='/kyselyt'><Questionnaires /></Route>
          <Route exact path='/raportit'></Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
        
  );
}

export default App;
