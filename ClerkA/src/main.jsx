import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'

import App from './App.jsx'

const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log(clerkKey)

if(!clerkKey){
  throw new Error('Missing Vite Clerk Publishable Key')
}

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey = {clerkKey}>
    <App />
    </ClerkProvider >
    
  </StrictMode>,
)
