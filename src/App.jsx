import './App.css'
import { DatesReminder, Question, Menufood } from "../public/link"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './Nabars';
function App() {
  return (
    <div>
      <NavScrollExample />
      <Router className="router_app">
        <Routes className="router_app">
          <Route path="DatesReminder" element={<DatesReminder />}></Route>
          <Route path="Question" element={<Question />}></Route>
          <Route path="Menufood" element={<Menufood />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App
