import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'
import Routes from '@routes'
import rootReducer from '@state/ducks'

const axiosInstance = axios.create({ baseURL: '/api' })

const store = createStore(
    rootReducer,
    window.INITIAL_STATE,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosInstance)))
)

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
