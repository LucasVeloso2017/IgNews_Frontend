import React from 'react';
import { Redirect,RouteProps as ReactDomRouteProps,Route as ReactDomRoute } from 'react-router-dom'


import {useAuth} from '../hooks/AuthHook'

interface RouteProps extends ReactDomRouteProps{
    isPrivate?:boolean
    component:React.ComponentType
}


const Route: React.FC<RouteProps> = ({ component:Component ,isPrivate = false, ...rest }) => {

    const { user } = useAuth()

    return (
        <>

            
            <ReactDomRoute {...rest} render={
                ({location})=>{
                    return isPrivate === !!user  ? (
                        <Component/>
                    ) : (
                        <Redirect to={{pathname: !user ? '/' : '/dashboard',state:{from:location}}}/>
                    )
                }
            } />

        </>
    );  
}

export default Route;