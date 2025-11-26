import Report1 from './Report1'
import Report2 from './Report2'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router'
import './App.css';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Report1 />} />
        <Route path="/2" element={<Report2 />} />
      </Routes>
    </BrowserRouter>
  )

}