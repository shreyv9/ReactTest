import PublicPage from './components/PublicPage.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {SignedIn, SignIn, SignUp} from "@clerk/clerk-react"
import './App.css'
import ProtectedPage from './components/ProtectedPage.jsx'

function App() {
  

  return (
    

      
    <Router>
        <Routes>
        <Route path="/" element={<PublicPage/>} />
        <Route path="/protected" element={<ProtectedPage/>} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
  )
}

export default App
