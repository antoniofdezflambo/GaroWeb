import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Resultados from './components/Resultados'
import Clasificacion from './components/Clasificacion'
import Videos from './components/Videos'
import Estadisticas from './components/Estadisticas'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={ <Resultados /> } />
          <Route path='/clasificacion' element={ <Clasificacion /> } />
          <Route path='/videos' element={ <Videos /> } />
          <Route path='/estadisticas' element={ <Estadisticas /> } /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App