import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Film from './pages/Film'
import Narrative from './pages/Narrative'
import Documentary from './pages/Documentary'
import Promos from './pages/Promos'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
        <Route element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="film" element={<Film />} />
            <Route path="narrative" element={<Narrative />} />
            <Route path="documentary" element={<Documentary />} />
            <Route path="promos" element={<Promos />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
  )
}