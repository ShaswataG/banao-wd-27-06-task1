import { useState, createContext, useContext } from 'react'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Group from './components/Group/Group'
import 'bootstrap/dist/css/bootstrap.css';

const UserContext = createContext()

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    const [username, setUsername] = useState('Siddharth Goyal')

    return (
        <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
            <BrowserRouter>
                <Header username={username} />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/groups/1" />}
                    ></Route>
                    <Route path="/groups/:id" to element={<Group />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export const useAuth = () => useContext(UserContext)
