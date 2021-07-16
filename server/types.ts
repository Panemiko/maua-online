import type { Application, Router } from 'express'
import type { Server as httpServer } from 'http'

// App components
export interface ServerComponent {
    config: ServerConfig
    api?: ApiComponent
    database?: DatabaseComponent
    start: Function
}

export interface DatabaseComponent {
    config: DatabaseConfig
    start: Function
}

export interface ApiComponent {
    config: ApiConfig
    app?: Application
    http?: httpServer
    routes?: Router
    start: Function
}

// App configs
export interface ServerConfig {
    api: ApiConfig
    database: DatabaseConfig
}

export interface DatabaseConfig {
    host: string
    port: number
    database: string
}

export interface ApiConfig {
    port: number
}


// Database entities

export interface UserEntity {
    _id: string
    token: string
    name: string
    role: string
    subject?: string
    class?: string
}
