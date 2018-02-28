import React from 'react';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Main from './pages/main';
import Login from './pages/login';
import NotFound from './pages/notFound';
import PrivateRoute from './components/privateRoute';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

export const App = props => {
    return (
        <MuiThemeProvider theme={theme}>
            <HashRouter>
                <Switch>
                    <PrivateRoute exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </MuiThemeProvider>
    );
};

export default App;
