import styled from "@emotion/styled"

const ResultadoContainer = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {
    console.log(resultado);
  return (
    <ResultadoContainer>
        <Imagen src={`https://cryptocompare.com/${resultado.IMAGEURL}`} alt='Imagen Crypto' />
        <div>
            <Precio>Price: <span>{resultado.PRICE}</span></Precio>
            <Texto>High Price Day: <span>{resultado.HIGHDAY}</span></Texto>
            <Texto>Low Price Day: <span>{resultado.LOWDAY}</span></Texto>
            <Texto>24h Change: <span>{resultado.CHANGEPCT24HOUR}%</span></Texto>
            <Texto>last Update: <span>{resultado.LASTUPDATE}</span></Texto>
        </div>
    </ResultadoContainer>
  )
}

export default Resultado