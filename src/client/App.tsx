import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import { fetchCurrentUser } from './services/UserAPI/userActions'

const loadData = ({ dispatch }) => dispatch(fetchCurrentUser())

const App: React.SFC<any> = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    )
}

export default App