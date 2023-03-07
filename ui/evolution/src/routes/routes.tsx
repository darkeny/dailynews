import { BrowserRouter, Route, Routes as RouterContainer } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/sign-in'
import SignUp from '../pages/sign-in/new'
export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <RouterContainer>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/sign-in'} element={<SignIn />} />
                    <Route path={'/sign-up'} element={<SignUp />} />
                </RouterContainer>
            </BrowserRouter>
        </>
    )
}