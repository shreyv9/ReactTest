
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { SignIn, SignUp} from "@clerk/clerk-react"
import './App.css'
import ProtectedPage from './components/ProtectedPage.jsx'
import PublicPage from './components/PublicPage.jsx'

function App() {
  

  return (
  
    <Router>
        <Routes>
        <Route path="/" element={<PublicPage/>} />
        <Route path="/protected" element={<ProtectedPage/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
  )
}

export default App
