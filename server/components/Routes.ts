import { Router } from "express"
import removeHeaders from '../middlewares/removeHeaders'

import Register from "../controllers/Register"
import Login from '../controllers/Login'

export default function Routes() {

    // Initializing Router
    const routes = Router()

    // Setting Up Middlewares
    routes.use(removeHeaders)

    // Setting up routes
    routes.post(`/register`, Register)
    routes.post(`/login`, Login)

    return routes
}
