import PropTypes from 'prop-types'

function Resultado({ equipo1, equipo2, marcador, fecha, escudo1, escudo2 }) {
  return (
    <div className="resultado">
      <div className="equipos">
        <div className="equipo">
          <img src={escudo1} alt={`Escudo de ${equipo1}`} className='escudo' />
          <span> {equipo1} </span>
        </div>
        <div className="marcador"> {marcador} </div>
        <div className="equipo">
          <img src={escudo2} alt={`Escudo de ${equipo2}`} className='escudo' />
          <span> {equipo2} </span>
        </div>
        <div className="fecha"> {fecha} </div>
      </div>
    </div>
  )
}

Resultado.propTypes = {
  equipo1: PropTypes.string.isRequired,
  equipo2: PropTypes.string.isRequired,
  marcador: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  escudo1: PropTypes.string.isRequired,
  escudo2: PropTypes.string.isRequired,
};

export default Resultado