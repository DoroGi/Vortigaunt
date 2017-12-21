import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCurrentUser } from '../services/UserAPI/userActions'

const Header = ({ user }) => {
    const authButton = user ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    )

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                React SSR
                </Link>
                <ul className="right">
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admins">Admins</Link>
                    </li>
                    <li>{authButton}</li>
                </ul>
            </div>
        </nav>
    )
}

function mapStateToProps({ user }) {
    return { user }
}

export default connect(mapStateToProps)(Header)