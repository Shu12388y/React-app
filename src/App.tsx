import './App.css'

// using react route to route different pages 
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navigation from './components/Navigation'
import Cart from './Pages/Cart'

function App() {
 

  return (
    <>
    <Router>
<Navigation/>
      
     
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path="/cart" Component={Cart}></Route>

      </Routes>
    </Router>
        
    </>
  )
}

export default App
