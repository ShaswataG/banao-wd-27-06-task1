import { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Group from "./components/Group/Group";

const UserContext = createContext();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const [username, setUsername] = useState('Siddharth Goyal')

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn }}>
      <BrowserRouter>
        <Header username={username} />
        <Routes>
          <Route path='/' to element={<Group />}></Route>     
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext);