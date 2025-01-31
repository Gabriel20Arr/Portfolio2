import { Route, Routes } from "react-router-dom"
import './App.css'

import { Home } from './views/Home/Home'
import { MoreProject } from "./views/Proyectos/MoreProject/MoreProject"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/moreProject' element={<MoreProject />} />
      </Routes>
       
    </div>
  )
}

export default App
