import { BrowserRouter, Routes, Route } from "react-router-dom"
import Example1 from "../pages/Example1"
import Start from "../pages/Start"
import SubFlow from "../pages/SubFlow"
import Uncontrolled from "../pages/Uncontrolled"
import PanZoom from "../pages/PanZoom"
import Layouting from "../pages/Layouting"
import Zustand from "../pages/Zustand"

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>}/>
        <Route path="example1" element={<Example1/>}/>
        <Route path="start" element={<Start/>}/>
        <Route path="subflow" element={<SubFlow/>}/>
        <Route path="uncon" element={<Uncontrolled/>}/>
        <Route path="panzoom" element={<PanZoom/>}/>
        <Route path="layouting" element={<Layouting/>}/>
        <Route path="zustand" element={<Zustand/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
