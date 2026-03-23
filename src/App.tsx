import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingLayout } from './shared/layout/LandingLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingLayout />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
