import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import About from './Pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  


<BrowserRouter>

<Routes>

<Route path="/" element={<App />} />
<Route path="/home" element={<HomePage />} />
<Route path="/profile" element={<ProfilePage />} />
<Route path="/about" element={<About />} />

</Routes>

  {/* <App /> */}

</BrowserRouter>

  </StrictMode>,
)
