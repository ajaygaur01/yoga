import { BrowserRouter, Route, Routes } from "react-router-dom"
import AboutUs from "./Pages/About"
import YogaAsanasApp from "./Pages/Yoga"
import Homepage from "./Pages/Homepage"
const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route  path="/"  element={<Homepage></Homepage>}></Route>
<Route  path="/about"  element={<AboutUs></AboutUs>}></Route>
<Route  path="/yoga"  element={<YogaAsanasApp></YogaAsanasApp>}></Route>
</Routes>
</BrowserRouter>
  )
}

export default App