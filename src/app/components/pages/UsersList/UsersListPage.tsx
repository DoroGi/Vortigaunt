import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listOperations } from '@state/ducks/list'
import { IStoreProps, Persons, ActionCreator, DataRoute } from '@types'
import { Helmet } from 'react-helmet'

interface IProps extends IStoreProps {
    readonly fetchUsers: ActionCreator,
    readonly users: Persons
}

class UsersList extends Component<IProps> {
    componentDidMount() {
        this.props.fetchUsers()
    }

    shouldComponentUpdate(nextProps: IProps) {
        return this.props.users !== nextProps.users
    }   

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }

    head() {
        return (
            <Helmet>
                <title>{`${this.props.users.length} Users Loaded`}</title>
                <meta property="og:title" content="Users App" />
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head()}
                <h3>Here's a big list of users:</h3>
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}

const mapStateToProps = ({ users }: IStoreProps) => ({ users })

export default {
    component: connect(mapStateToProps, { fetchUsers: listOperations.fetchUsers })(UsersList),
    loadData: listOperations.fetchUsers
} as DataRoute