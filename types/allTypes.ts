import { AxiosInstance, AxiosResponse } from 'axios'
import { Store, Dispatch } from 'redux'
import { RouteConfig } from 'react-router-config'
import IStoreState from '../src/app/state/store/IStoreState'

// Server
import { Request } from 'express'
export { Request } from 'express'
export { AxiosResponse } from 'axios'

// React
export type HOC = (InnerComponent: React.ComponentClass<any>) => React.ComponentClass<any>
export type Context = { notFound?: boolean, url?: string }

// React Router
export interface DataRoute extends RouteConfig { readonly loadData?: Function, readonly routes?: Array<DataRoute> }

// Redux
export { Store, Dispatch, Reducer } from 'redux'
export { default as IStoreState } from '../src/app/state/store/IStoreState'
export type IStoreProps = IStoreState
export type StoreBuilder = (req: Request) => Store<{}>
export type Action = { readonly type: string, readonly payload: AxiosResponse }
export type ActionFiller = (data: AxiosResponse) => Action
export type ActionCreator = () => (dispatch: Dispatch, getState: () => IStoreState, api: AxiosInstance) => void

// Custom types
export type GoogleUser = { readonly _id: string, readonly googleId: string, readonly v: number } | null
export type Persons = Array<{ readonly id: string, readonly name: string }>
