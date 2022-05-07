import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 34px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }`

function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setresultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {
      //console.log(monedas);
      const cotizarCrypto = async () => {
        setCargando(true)
        setresultado({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.crypto}&tsyms=${monedas.moneda}`
        //console.log(url);
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        //console.log(resultado.DISPLAY[monedas.crypto][monedas.moneda]);//asi se accede a los dats de un objeto de forma dinamica con variabes de nombre
        setresultado(resultado.DISPLAY[monedas.crypto][monedas.moneda])
        setCargando(false)
    }
    cotizarCrypto()
  }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Crypto Image' />
      <div>
        <Heading>Check your favorite Cryptocurrency</Heading>
        <Formulario setMonedas={setMonedas}/>
        {cargando ? <Spinner /> : null}
        { resultado.PRICE && <Resultado resultado={resultado} /> }
      </div>
    </Contenedor>
  )
}

export default App
