import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'

const root = createRoot(document.querySelector('#root')!)
const store = setupStore()

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
