import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
const PrivateRoute = (props) => {
    const isAuth = useSelector(state => state.authReducer)
    return (
        <>
            {isAuth ? props.children : <Redirect to='/login' />}
        </>
    )
}

export default PrivateRoute

const AntiPrivateRoute = (props) => {
    const isAuth = useSelector(state => state.authReducer)
    return (
        <>
            {isAuth ? <Redirect to='/' /> : props.children}
        </>
    )
}

export { AntiPrivateRoute }
