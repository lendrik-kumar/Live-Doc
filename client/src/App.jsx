import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import EditoPage from './pages/EditoPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<EditoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
