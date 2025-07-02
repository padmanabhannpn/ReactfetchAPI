// Import React StrictMode for highlighting potential issues in development
import { StrictMode } from 'react'

// Import createRoot from ReactDOM to initialize the app
import { createRoot } from 'react-dom/client'

// Import global styles
import './index.css'

// Import the main App component
import App from './App.jsx'

// Import React Router components for routing
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Import individual page components
import HomePage from './Pages/HomePage.jsx'
import ProfilePage from './Pages/ProfilePage.jsx'
import About from './Pages/About.jsx'
import UserPage from './Pages/UserPage.jsx'
import PrivateRoute from './PrivateRoute.jsx'

// Render the root of the application
createRoot(document.getElementById('root')).render(
  <StrictMode> {/* Helps detect potential issues in development mode */}

    <BrowserRouter> {/* Enables client-side routing */}

      <Routes> {/* Define all the routes for the application */}

        {/* Route for base path - renders App component */}
        <Route path="/" element={<App />} />

        {/* Route for /home - renders HomePage component */}
        <Route path="/home" element={<HomePage />} />

        <Route  element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />

        {/* Route for /about - renders About component */}
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<UserPage />} />
        </Route>

        {/* Route for /profile - renders ProfilePage component */}
        
        {/* Fallback for unmatched routes */}
        <Route path="*" element={<h2>Page Not Found</h2>} />

      </Routes>

      {/* <App /> This was the old direct rendering of App - now handled via routes */}

    </BrowserRouter>

  </StrictMode>,
)