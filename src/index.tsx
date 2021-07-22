import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
    // <ThemeProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    // </ThemeProvider>,
    document.getElementById(`root`)
)
