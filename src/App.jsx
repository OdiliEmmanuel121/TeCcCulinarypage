import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage/Home"
import Services from "./pages/servicepage/Services"
import Nav from "./component/navfolder/navpage/Nav"
import Faqs from "./pages/faqs/Faqs"
import Contactus from "./pages/contactpage/Contactus"



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faqs" element={<Faqs/>}/>
          <Route path="/contactUs" element={<Contactus />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App