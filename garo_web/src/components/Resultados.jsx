import { useState } from "react"
import Resultado from "./Resultado"

const mockResultados = [
  { id: 1, equipo1: 'Equipo A', equipo2: 'Equipo B', marcador: '2 - 1', fecha: '03 Ene 2025', escudo1: '', escudo2: '' },
  { id: 2, equipo1: 'Equipo C', equipo2: 'Equipo D', marcador: '0 - 0', fecha: '19 Dic 2024', escudo1: '', escudo2: '' },
  { id: 3, equipo1: 'Equipo E', equipo2: 'Equipo F', marcador: '1 - 3', fecha: '18 Dic 2024', escudo1: '', escudo2: '' },
]

function Resultados() {
  const [resultados, setResultados] = useState(mockResultados)

  const cargarMasResultados = () => {
    const nuevosResultados = [
      { id:4, equipo1: 'Equipo G', equipo2: 'Equipo H', marcador: '4 - 1', fecha: '04 Ene 2025', escudoequipo1: '../img/escudogaro.svg', escudoequipo2: '../img/escudogaro.svg' }
    ]

    setResultados([...resultados, ...nuevosResultados])
  }

  return (
    <div className="resultados-container">
      <h1> Resultados </h1>

      <div className="resultados-list">
        {resultados.map((partido) => (
          <Resultado
            key={partido.id}
            equipo1={partido.equipo1}
            equipo2={partido.equipo2}
            marcador={partido.marcador}
            fecha={partido.fecha}
            escudo1={partido.escudo1}
            escudo2={partido.escudo2}
          />
        ))}
      </div>

      <button className="cargar-mas" onClick={cargarMasResultados} >
        Más resultados
      </button>
    </div>
  )
}

export default Resultados