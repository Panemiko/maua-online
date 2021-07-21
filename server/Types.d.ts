import type { Application, Router } from 'express'
import type { Server as httpServer } from 'http'

// App components
export interface ServerComponent {
    config: ServerConfig
    api?: ApiComponent
    database?: DatabaseComponent
    start(useNext?: boolean): Promise<void>
}

export interface DatabaseComponent {
    config: DatabaseConfig
    start(): Promise<void>
}

export interface ApiComponent {
    config: ApiConfig
    app?: Application
    http?: httpServer
    routes?: Router
    start(): Promise<void>
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
    accessDuration: string
    port: number
}


// Database entities
export interface UserEntity {
    _id: string
    register: string
    token: string
    role: string
    name: string
    email: string
    password: string
    subject?: string
    class?: string
}
