import UserContextProvider from "./context/UserContextProvider"
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
