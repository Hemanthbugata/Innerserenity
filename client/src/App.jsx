import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Register from "./components/Register";
import Allusers from "./components/Allusers";
import Allprofessionals from "./components/Allprofessionals"
import Chatcomp from "./components/Chatcomp";
import Events from "./components/Events"
function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Allusers />} />
          <Route path="/professionals" element={<Allprofessionals />} />
          <Route path="/chat/:type/:address" element={<Chatcomp/>} />
          <Route path="/events" element={<Events />} />
      </Routes>
    </>
  )
}

export default App
