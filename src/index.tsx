import ReactDOM from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import RegisterPage from './pages/Register'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/register" component={RegisterPage} />
        </Switch>
    </BrowserRouter>,
    document.getElementById(`root`)
)
