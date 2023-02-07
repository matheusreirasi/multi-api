import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../pages/Login"
import { RandomUser } from "../pages/RandomUser"
import { ProtectedLayout } from "../components/ProtectedLayout"
import { HttpCat } from "../pages/HttpCat"
import { RandomDog } from "../pages/RandomDog"
import { Clients } from "../pages/Clients"


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}>
                </Route>
                
                <Route path="/profile" element={<ProtectedLayout> <h1>Isso é um teste</h1> </ProtectedLayout>}>
                </Route>
                
                <Route path="/randomuser" element={<ProtectedLayout> <RandomUser/> </ProtectedLayout>}>
                </Route>

                <Route path="/httpcat" element={<ProtectedLayout> <HttpCat/> </ProtectedLayout>}>
                </Route>

                <Route path="/randomdog" element={<ProtectedLayout> <RandomDog/> </ProtectedLayout>}>
                </Route>

                <Route path="/clients" element={<ProtectedLayout> <Clients/> </ProtectedLayout>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}