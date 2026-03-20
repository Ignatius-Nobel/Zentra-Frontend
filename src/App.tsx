import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '@/components/layout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
