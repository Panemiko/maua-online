
export interface ServerComponent {
    config: ServerConfig
    api?: ApiComponent
    start: Function
}

export interface ApiComponent {
    config: ApiConfig
    start: Function
}

export interface ServerConfig {
    api: ApiConfig
}

export interface ApiConfig {
    port: number
}
