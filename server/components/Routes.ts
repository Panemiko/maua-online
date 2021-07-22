import { Router } from "express"

import removeHeaders from '../middlewares/removeHeaders'
import addHeaders from "../middlewares/addHeaders"
import Register from "../controllers/Register"
import Login from '../controllers/Login'
import Access from "../controllers/Access"

/**
 * @returns Express Router with the API routes
 * @description Sets the controllers on each route
 */
export default async function Routes(): Promise<Router> {

    // Initializing Router
    const routes = Router()

    // Setting Up Middlewares
    routes.use(removeHeaders)
    routes.use(addHeaders)

    // Setting up routes
    routes.post(`/register`, Register)
    routes.post(`/login`, Login)
    routes.post(`/access`, Access)

    return routes
}
