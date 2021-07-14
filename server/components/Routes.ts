import { Router } from "express"
import removeHeaders from '../middlewares/removeHeaders'

export default function Routes() {

    // Initializing Router
    const routes = Router()

    // Setting Up Middlewares
    routes.use(removeHeaders)

    return routes
}
