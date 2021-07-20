import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RegisterPage from './pages/Register'
import NotFound from './pages/NotFound'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/register" exact={true} component={RegisterPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById(`root`)
)
