/* eslint-disable no-unused-vars */
 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './components/layout/Home.jsx'
import Dashboard from './components/layout/Dashboard/Dashboard.jsx'
import EditResume from './components/layout/Dashboard/resume/[resumeId]/index.jsx'
import ViewResume from './my-resume/[resumeId]/view/index.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
     
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path:'/dashboard/resume/:resumeId/edit/',
        element:<EditResume />
      },
      
    ]
    
  },
  {
    path:'/my-resume/:resumeId/view',
    element:<ViewResume/>
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
   <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
