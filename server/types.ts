import type { Application, Router } from 'express'
import type { Server as httpServer } from 'http'

export interface ServerComponent {
    config: ServerConfig
    api?: ApiComponent
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
