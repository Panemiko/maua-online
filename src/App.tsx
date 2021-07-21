import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyle from './styles/Global'
import RegisterPage from './pages/Register'
import NotFound from './pages/NotFound'

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route path="/register" component={RegisterPage} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App
