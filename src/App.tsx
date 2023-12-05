import { Outlet } from "react-router-dom"
import { Footbar } from "./components/Footbar"
import { Navbar } from "./components/Navbar"
import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footbar/>
    </>
  )
}

export default App
