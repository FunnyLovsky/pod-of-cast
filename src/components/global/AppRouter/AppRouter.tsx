import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../../../pages/Error'
import Header from '../Header/Header'
import { routes } from '../../../router/routes'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<Header />}>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    )
}

export default AppRouter
